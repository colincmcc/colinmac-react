import fetch from 'cross-fetch';
import Creators from './actions';
import Config from '../../config';

const requestPortfolioJsonAction = Creators.requestPortfolioJsonAction;
const receivePortfolioJsonAction = Creators.receivePortfolioJsonAction;

// Fetch Portfolio Custom Posttype Json data from WP API and update the Redux store
const fetchPortfolioJson = project =>
  (dispatch) => {
    // This will toggle the showLoader
    dispatch(requestPortfolioJsonAction(project));
    return fetch(`${Config.apiUrl}/wp-json/wp/v2/projects/?slug=${project}`)
      .then(response => response.json())
      .then((json) => {
        const responseData = json;
        const data = [];

        responseData.map((child) => {
          const childData = {
            id: child.id,
            title: child.title.rendered,
            slug: child.slug,
            background_color: child.acf.background_color,
            main_color: child.acf.main_color,
            accent_color: child.acf.accent_color,
            font_color: child.acf.font_color,
            project_url: child.acf.project_url,
            background_image_url: child.acf.background_image.url,
            logo: child.acf.logo,
            image_1: child.acf.image_1,
            image_2: child.acf.image_2,
            image_3: child.acf.image_3,
            image_4: child.acf.image_4,
            image_5: child.acf.image_5,
          };

          data.push(childData);
          return null;
        });

        dispatch(receivePortfolioJsonAction(data));
      });
  };
export default fetchPortfolioJson;


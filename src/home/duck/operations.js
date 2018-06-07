/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack
*/

import fetch from 'cross-fetch';
import actions from './actions';


// Fetch Portfolio Custom Posttype Json data from WP API and update the Redux store
const fetchPortfolioJson = () =>
  (dispatch) => {
    // This will toggle the showLoader
    dispatch(actions.request_portfolio_json());

    // This will fetch and load the data
    return fetch('http://localhost:8080/wp-json/wp/v2/projects')
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

        dispatch(actions.receive_portfolio_json(data));
      });
  };
export default fetchPortfolioJson;


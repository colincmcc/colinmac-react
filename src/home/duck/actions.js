/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/


import types from './types';


// This is for future featured projects
const requestPortfolioJson = () => ({
  type: types.REQUEST_PORTFOLIO_JSON,
});

const receivePortfolioJson = json => ({
  type: types.RECEIVE_PORTFOLIO_JSON,
  projectData: json.map(child =>  {
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
        return data;
      });
    })
})


export default { requestPortfolioJson, receivePortfolioJson };


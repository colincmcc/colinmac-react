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
    dispatch(actions.requestPortfolioJson());

    // This will fetch and load the data
    return fetch('http://localhost:8080/wp-json/wp/v2/projects')
      .then(response => response.json())
      .then(json => dispatch(actions.receivePortfolioJson(json)));
  };
export default fetchPortfolioJson;


/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/


import types from './types';

// This is for future featured projects
const request_portfolio_json = () => ({
  type: types.REQUEST_PORTFOLIO_JSON,
})

const receive_portfolio_json = (projectData) => ({
  type: types.RECEIVE_PORTFOLIO_JSON,
  projectData
})

export default { request_portfolio_json, receive_portfolio_json };


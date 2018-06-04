import { createActions } from 'reduxsauce';

/*
* Normally types & actions would be separated, but reduxsauce creates string literals for action types
*/
const { Creators, Types } = createActions({
  requestPortfolioJson: ['project'],
  receivePortfolioJson: ['projectData'],
});

export default { Creators, Types };


import types from './types';


const initialState = {
  showLoader: false,
  projectData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_PORTFOLIO_JSON: {
      return {
        ...state,
        projectData: [],
        showLoader: true,
      };
    }
    case types.RECEIVE_PORTFOLIO_JSON: {
      return {
        ...state.projects,
        projectData: action.projectData,
        showLoader: false,
      };
    }
    default:
      return state;
  }
};


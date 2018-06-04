import types from './types';

const initialState = {
  project: '',
  showLoader: false,
  projectData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_PORTFOLIO_JSON: {
      const { project } = action;
      return {
        ...state,
        project,
        projectData: [],
        showLoader: true,
      };
    }
    case types.RECEIVE_PORTFOLIO_JSON: {
      const { projectData } = action;
      return {
        ...state,
        projectData,
        showLoader: true,
      };
    }
    default:
      return state;
  }
};


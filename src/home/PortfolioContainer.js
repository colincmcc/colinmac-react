import { connect } from 'react-redux';
import PortfolioComponent from './PortfolioComponent';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
  const { projectData, showLoader } = state.home;
  return {
    projectData,
    showLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Fetches the custom Post Type 'Portfolio' Json
  // from WP API and pushes it into the Redux store.
  const fetchPortfolioJson = () => {
    dispatch(homeOperations.fetchPortfolioJson());
  };

  return { fetchPortfolioJson };
};

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortfolioComponent);

export default PortfolioContainer;

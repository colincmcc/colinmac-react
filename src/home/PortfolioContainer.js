import {connect} from 'react-redux'
import PortfolioComponent from './PortfolioComponent'
import {homeOperations} from './duck'

const mapStateToProps = (state) => {
  const { portfolioData, showLoader} = state.home;
  return{
    portfolioData,
    showLoader
  }
}

const mapDispatchToProps = (dispatch) => {
  const fetchPortfolio = (portfolio) => {
    dispatch(homeOperations.fetchPortfolioJson(project))
  }

  return{ fetchPortfolioJson}
}

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioComponent)

export default PortfolioContainer;

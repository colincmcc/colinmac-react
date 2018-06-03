import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
  requestPortfolioJson: ['project'],
  receivePortfolioJson: ['portfolioData']
})

export { Creators, Types };
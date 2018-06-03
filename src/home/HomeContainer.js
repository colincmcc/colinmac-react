import {connect} from 'react-redux'
import HomeComponent from './HomeComponent'
import {homeOperations} from './duck'

const HomeContainer = connect()(HomeComponent)

export default HomeContainer

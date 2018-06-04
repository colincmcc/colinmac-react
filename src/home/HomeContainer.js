import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

// Highest level component
// * Not needed until we add more complexity in the HomeComponent

const HomeContainer = connect()(HomeComponent);

export default HomeContainer;

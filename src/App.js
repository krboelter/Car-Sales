import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { removeFeature, buyItem } from './actions/actions';

const App = (props) => {
  

  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

const mapDispatchToProps = {
  removeFeature,
  buyItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

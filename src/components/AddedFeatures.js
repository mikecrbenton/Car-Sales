import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map( feature => (
            <AddedFeature 
               key={feature.id} 
               feature={feature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
   return {
      car: {
         features: state.car.features
      }   
   }
}

// DON'T NEED DISPATCH IN THIS COMPONENT 
// IMPORTED DIRECTLY INTO CHILD OF THIS COMPONENT

export default connect(mapStateToProps, {})(AddedFeatures);

import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/carActions'


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
         className="button"
         onClick={ ()=> props.addFeature(props.feature)}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
   return {
      // **THE DATA IS COMING IN AS PROPS FROM THE PARENT -
      // THIS IS BECAUSE INDIVIDUAL ARRAY ELEMENTS ARE 
      // BEING UNIQUELY PASSED DOWN BY MAP() - 
   }
}

const mapDispatchToProps = { addFeature };

export default connect( mapStateToProps, mapDispatchToProps )(AdditionalFeature);


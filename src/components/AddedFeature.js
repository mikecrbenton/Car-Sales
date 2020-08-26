import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
         className="button"
         onClick={ ()=> {props.removeFeature(props.feature)}}
      >X</button>
      {props.feature.name}
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

const mapDispatchToProps = { removeFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);

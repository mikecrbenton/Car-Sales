import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {

   console.log("ADDITIONAL FEATURES PROPS: ", props);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map( feature => (
            <AdditionalFeature 
               key={feature.id} 
               feature={feature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
   return {
      additionalFeatures : state.additionalFeatures
   }
}
// DON'T NEED DISPATCH IN THIS COMPONENT 
// IMPORTED DIRECTLY INTO CHILD OF THIS COMPONENT

export default connect( mapStateToProps, {} )(AdditionalFeatures);

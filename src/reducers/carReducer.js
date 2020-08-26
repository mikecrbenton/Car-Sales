 // IMPORT ACTIONS
 import { REMOVE_FEATURE, ADD_FEATURE } from '../actions/carActions';


 export const initialState = {

    additionalPrice: 0,

    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },

    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


export const carReducer = ( state = initialState, action ) => {

     console.log( state, action );

     switch ( action.type ) {

   
      case ADD_FEATURE : //==============================================

      // HOLD UPDATED PRICE - INITIALIZE WITH CURRENT
      let updatedPrice = state.additionalPrice; 

      // FILTER THROUGH THE EXISTING FEATURES BEING HELD IN THE features[] 
      // ARRAY.  IF THAT FEATURE EXISTS ALREADY, SAVE TO currentFeature
      const currentFeature = state.car.features.filter( (feature) => 
         feature.id === action.payload.id
      );
      // IF THAT FEATURE DOESN'T EXIST YET, ADD THE "PAYLOAD" WHICH IS A FEATURE
      // OBJECT, TO THE features[] ARRAY
      // --THE UPDATED PRICE WILL BE THE ORIGINAL + THE "PRICE" WITHIN THE PAYLOAD
      // --WHICH IS AN OBJECT --> action.feature(aka "the payload").price
      if( !currentFeature.length ) { 
         state.car.features.push(action.payload);
         updatedPrice = state.additionalPrice + action.payload.price;
      }

      return {
         //SPREAD YOUR STATE
         ...state,
         additionalPrice: updatedPrice,  // ---> update to new price
         // **THIS IS ALSO AN OBJECT IN THE OTHER OBJECT, SO YOU ALSO HAVE TO SPREAD
         // THIS TOO - ANYTIME IT IS AN OBJECT
         car: {
            ...state.car,  // it's a nested object - notice the .
            features: state.car.features // ---> update the array to include any new feature(s)
         }
      }

      case REMOVE_FEATURE : //===============================================

         return {
            //SPREAD YOUR STATE
            ...state,
            // WHEN YOU CLICK ON THE FEATURE, THE OBJECTS PRICE KEY IS SUBTRACTED FROM THE
            // "GLOBAL" PRICE ( additionalPrice ) 
            additionalPrice: state.additionalPrice - action.payload.price,
             // **THIS IS ALSO AN OBJECT IN THE OTHER OBJECT, SO YOU ALSO HAVE TO SPREAD
             // THIS TOO - ANYTIME IT IS AN OBJECT
            car: {
                ...state.car,
                // UPDATE THE ARRAY TO REMOVE THE SELECTED ID
                features: state.car.features.filter(feature => feature.id !== action.payload.id)
            }
        } 
      
      default:
         console.log("error");
         return state;
     }
  }
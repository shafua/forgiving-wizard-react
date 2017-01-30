import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField } from '../actions'

// external components
import Select from 'react-select';

// internal components
import SingleField from './SingleField'


// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

const SecondPage = ({inputHandler, countryHandler, formState}) => {
    var options = [
        {"label": "Albania", "value": "AL"},
        {"label": "Argentina", "value": "AR"},
        {"label": "Armenia", "value": "AM"},
        {"label": "Aruba", "value": "AW"},
        {"label": "Australia", "value": "AU"},
        {"label": "Austria", "value": "AT"},
    ];

  return (
    <div>
      <h3>Secon Page</h3>
      <div>Country
      <Select
        name="country"
        value={formState.country}
        options={options}
        onChange={countryHandler}
      />
      </div>
      <SingleField
        title="City"
        name={'city'}
        inputType="text"
        placeholder="enter your city"
        handler={inputHandler('city')}
        constent={formState.city}
      />
      <SingleField
        title="Street"
        name={'street'}
        inputType="text"
        placeholder="enter your street"
        handler={inputHandler('street')}
        constent={formState.street}
      />
      <SingleField
        title="Bulilding"
        name={'bulilding'}
        inputType="text"
        placeholder="enter your bulilding number/code"
        handler={inputHandler('bulilding')}
        constent={formState.bulilding}
      />
      <SingleField
        title="Apartment"
        name={'apartment'}
        inputType="text"
        placeholder="enter your apartment/room number/id"
        handler={inputHandler('apartment')}
        constent={formState.apartment}
      />
      <SingleField
        title="ZIP code"
        name={'zip'}
        inputType="number"
        placeholder="enter your zip code"
        handler={inputHandler('zip')}
        constent={formState.zip}
      />
    </div>
  );
}

export default connect(
  (state) => ({formState: state}),
  dispatch => ({
    inputHandler: (fieldName) => (e) => dispatch(changeField(fieldName, e.target.value)),
    countryHandler: (country) => dispatch(changeField('country', country)),

  })
)(SecondPage);

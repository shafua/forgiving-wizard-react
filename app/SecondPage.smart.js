import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField } from '../actions'

// external components
import Select from 'react-select';

// internal components
import SingleField from './SingleField'


const SecondPage = ({inputHandler, countryHandler, formState}) => {

  return (
    <div>
      <h3>Secon Page</h3>
      <div>Country
      <Select.Async
        name="country"
        value={formState.country}

        loadOptions={
          () => fetch(`/utils/countries.json`)
                .then((response) => response.json())
                .then((json) => ({ options: json, complete: true }))
        }
        onChange={country => countryHandler(country.value)}
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
  state => ({formState: state}),
  dispatch => ({
    inputHandler: fieldName => e => dispatch(changeField(fieldName, e.target.value)),
    countryHandler: country => dispatch(changeField('country', country)),

  })
)(SecondPage);

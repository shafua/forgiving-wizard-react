import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField } from '../actions'

// external components
import Select from 'react-select';

// internal components
import SingleField from './SingleField'


const SecondPage = ({inputHandler, langsHandler, formState}) => {
  return (
    <div>
      <h3>Third Page</h3>
      <div>Languages
      <Select.Async
        name="languages"
        value={formState.languages}
        multi
        simpleValue
        loadOptions={
          () => fetch(`/utils/lang.json`)
                .then((response) => response.json())
                .then((json) => ({ options: json, complete: true }))
        }
        onChange={langsHandler}
      />
      </div>
      <SingleField
        title="Occupation"
        name={'occupation'}
        inputType="text"
        placeholder="enter your occupation"
        handler={inputHandler('occupation')}
        constent={formState.occupation}
      />
      <SingleField
        title="Hobbies"
        name={'hobbies'}
        inputType="text"
        placeholder="enter your hobbies"
        handler={inputHandler('hobbies')}
        constent={formState.hobbies}
      />
    </div>
  );
}

export default connect(
  state => ({formState: state}),
  dispatch => ({
    inputHandler: fieldName => e => dispatch(changeField(fieldName, e.target.value)),
    langsHandler: langs => dispatch(changeField('languages', langs)),

  })
)(SecondPage);

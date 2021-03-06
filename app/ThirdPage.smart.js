import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField } from '../actions'

// external components
import Select from 'react-select';

// internal components
import SingleField from './SingleField'
import InputLabel from './InputLabel'

const ThirdPage = ({inputHandler, langsHandler, formState}) => {
  return (
    <div>
      <h3>Third Page</h3>
      <div>
        <InputLabel title={"Languages"} />
        <Select.Async
          name="languages"
          value={formState.languages}
          placeholder="select or type"
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
        content={formState.occupation}
      />
      <SingleField
        title="Hobbies"
        name={'hobbies'}
        inputType="text"
        placeholder="enter your hobbies"
        handler={inputHandler('hobbies')}
        content={formState.hobbies}
      />
    </div>
  );
}

export default connect(
  state => ({formState: state.thirdPage}),
  dispatch => ({
    inputHandler: fieldName => e => dispatch(changeField('thirdPage', fieldName, e.target.value)),
    langsHandler: langs => dispatch(changeField('thirdPage', 'languages', langs)),

  })
)(ThirdPage);

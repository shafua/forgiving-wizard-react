import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField } from '../actions'

// internal components
import SingleField from './SingleField'


const FourthPage = ({inputHandler, formState}) => {
  return (
    <div>
      <h3>Fourth Page</h3>
      <SingleField
        title="Additional Field 1"
        name={'af1'}
        inputType="text"
        placeholder="enter your af1"
        handler={inputHandler('af1')}
        content={formState.af1}
      />
      <SingleField
        title="Additional Field 2"
        name={'af2'}
        inputType="text"
        placeholder="enter your af2"
        handler={inputHandler('af2')}
        content={formState.af2}
      />
      <SingleField
        title="Additional Field 3"
        name={'af3'}
        inputType="text"
        placeholder="enter your af3"
        handler={inputHandler('af3')}
        content={formState.af3}
      />
    </div>
  );
}

export default connect(
  state => ({formState: state.fourthPage}),
  dispatch => ({
    inputHandler: fieldName => e => dispatch(changeField('fourthPage', fieldName, e.target.value)),

  })
)(FourthPage);

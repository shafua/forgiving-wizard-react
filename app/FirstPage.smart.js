import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField, changeEmailField } from '../actions'

// internal components
import SingleField from './SingleField'
import EmailField from './EmailField'




const FirstPage = ({inputHandler, emailHandler, formState}) => {
  return (
    <div>
        <h3>First page</h3>
          <SingleField
            title="Name"
            name={'name'}
            inputType="text"
            placeholder="your name"
            handler={inputHandler('name')}
            constent={formState.name}
          />
          <SingleField
            title="Surname"
            name={'surname'}
            inputType="text"
            placeholder="your surname"
            handler={inputHandler('surname')}
            constent={formState.surname}
          />
          <SingleField
            title="Date of birth"
            name={'birth'}
            inputType="number"
            placeholder="temprorary"
            handler={inputHandler('birth')}
            constent={formState.birth}
          />
          <EmailField
            name="email"
            handler={emailHandler}
            title="Email"
            placeholder="your email"
            content={formState.email.value}
            validation={formState.email.validation}
          />

  </div>
);
}


export default connect(
  (state) => ({formState: state}),
  dispatch => ({
    inputHandler: (fieldName) => (e) => dispatch(changeField(fieldName, e.target.value)),
    emailHandler: (e) => dispatch(changeEmailField(e.target.value))

  })
)(FirstPage)

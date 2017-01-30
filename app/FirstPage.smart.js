import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField, changeEmailField, changeBirthField } from '../actions'

// external components
import Select from 'react-select';

// internal components
import SingleField from './SingleField'
import EmailField from './EmailField'

let forgivingMonth = [
  {"label": "01 January", "value": 1},
  {"label": "02 Febuary", "value": 2},
  {"label": "03 March", "value": 3},
]


const FirstPage = ({inputHandler, emailHandler, birthHandler, birthMonthHandler, formState}) => {
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
            title="Day of birth"
            name={'birthDay'}
            inputType="number"
            min={1}
            max={31}
            placeholder="temprorary"
            handler={birthHandler('day')}
            constent={formState.birth.day}
          />
          <Select
            name="month"
            value={formState.birth.month}
            options={forgivingMonth}
            onChange={month => birthMonthHandler(month.value)}
          />
          <SingleField
            title="Year of birth"
            name={'birthYear'}
            inputType="number"
            min={1900}
            max={+((new Date().getFullYear()) - 13)}
            placeholder="temprorary"
            handler={birthHandler('year')}
            constent={formState.birth.year}
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
    inputHandler: fieldName => e => dispatch(changeField(fieldName, e.target.value)),
    birthHandler: fieldName => e => dispatch(changeBirthField(fieldName, e.target.value)),
    birthMonthHandler: month => dispatch(changeBirthField('month', month)),
    emailHandler: e => dispatch(changeEmailField(e.target.value))

  })
)(FirstPage)

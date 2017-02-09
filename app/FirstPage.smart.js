import React, {PropTypes} from 'react';
import {connect} from 'react-redux'



import { changeField, changeEmailField, changeBirthField } from '../actions'

// external components
import Select from 'react-select';

// internal components
import SingleField from './SingleField'
import EmailField from './EmailField'
import InputLabel from './InputLabel'

let forgivingMonth = [
  {"label": "01 January", "value": 1},
  {"label": "02 February", "value": 2},
  {"label": "03 March", "value": 3},
  {"label": "04 April", "value": 4},
  {"label": "05 May", "value": 5},
  {"label": "06 June", "value": 6},
  {"label": "07 July", "value": 7},
  {"label": "08 August", "value": 8},
  {"label": "09 September", "value": 9},
  {"label": "10 October", "value": 10},
  {"label": "11 November", "value": 11},
  {"label": "12 December", "value": 12}
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
            content={formState.name}
          />
          <SingleField
            title="Surname"
            name={'surname'}
            inputType="text"
            placeholder="your surname"
            handler={inputHandler('surname')}
            content={formState.surname}
          />
        <div>
            <InputLabel title={"Date of birth"} />
            <div className={"birth_block"}>
              <div style={{'flexGrow':1}}>
                <SingleField
                  name={'birthDay'}
                  inputType="number"
                  min={1}
                  max={31}
                  placeholder="day"
                  handler={birthHandler('day')}
                  content={formState.birth.day}
                />
              </div>
              <div style={{'flexGrow':2}}>
                <Select
                  name="month"
                  value={formState.birth.month}
                  placeholder="month"
                  options={forgivingMonth}
                  onChange={month => birthMonthHandler(month.value)}
                />
              </div>
              <div style={{'flexGrow':1}}>
                <SingleField
                  name={'birthYear'}
                  inputType="number"
                  min={1900}
                  max={+((new Date().getFullYear()) - 13)}
                  placeholder="year"
                  handler={birthHandler('year')}
                  content={formState.birth.year}
                />
              </div>
            </div>
          </div>
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
  (state) => ({formState: state.firstPage}),
  dispatch => ({
    inputHandler: fieldName => e => dispatch(changeField('firstPage', fieldName, e.target.value)),
    birthHandler: fieldName => e => dispatch(changeBirthField(fieldName, e.target.value)),
    birthMonthHandler: month => dispatch(changeBirthField('month', month)),
    emailHandler: e => dispatch(changeEmailField(e.target.value))

  })
)(FirstPage)

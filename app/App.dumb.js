import React from 'react';


// internal components
import SingleField from './SingleField'
import EmailField from './EmailField'

import emailValidator from '../utils/emailValidator'

export default props => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <SingleField
            title="Name"
            name={'name'}
            inputType="text"
            placeholder="your name"
            handler={(e) => console.log(e)}
            constent={"John"}
          />
          <EmailField
            name="email"
            handler={(e) => console.log(e)}
            title="Email"
            placeholder="your email"
            content={"Dow@yahoo.com"}
            validation={emailValidator("Dow@yahoo.com")}
          />
  </div>
  )

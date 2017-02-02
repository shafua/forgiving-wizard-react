import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'

import emailValidator from '../utils/emailValidator'

import 'react-select/dist/react-select.css';
import '../styles/main.scss';

export default props => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">P1</Link></li>
        <li><Link to="/2">P2</Link></li>
        <li><Link to="/3">P3</Link></li>
        <li><Link to="/4">P4</Link></li>
      </ul>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      <Route exact path="/" component={FirstPage}/>
      <Route path="/2" component={SecondPage}/>
      <Route path="/3" component={ThirdPage}/>
      <Route path="/4" component={FourthPage}/>
    </div>
  </BrowserRouter>
  )

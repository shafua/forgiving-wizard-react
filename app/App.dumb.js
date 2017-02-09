import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import { TransitionMotion, spring } from 'react-motion'

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
      <div id="main">
        <FadeRoute exact path="/" pageIndex={0} component={FirstPage}/>
        <FadeRoute path="/2" pageIndex={1} component={SecondPage}/>
        <FadeRoute path="/3" pageIndex={2} component={ThirdPage}/>
        <FadeRoute path="/4" pageIndex={3} component={FourthPage}/>
      </div>
    </div>
  </BrowserRouter>
  )


const FadeRoute = ({ component: Component, pageIndex, ...rest }) => {
  const springConfig = {precision: 5, stiffness: 300, damping: 20}
  const willLeave = () => ({ zIndex: 1, opacity: spring(0), left: spring(-100) })
  const willEnter = () => ({ zIndex: 2, opacity: 0, left: 300 })

  return (
    <Route {...rest} children={({ location, match }) => (
      <TransitionMotion
        willEnter={willEnter}
        willLeave={willLeave}
        styles={match ? [ {
          key: location.pathname,
          style: { opacity: spring(1), left: spring(0, springConfig) },
          data: match
        } ] : []}
      >
        {interpolatedStyles => (
          <div className="sub_main">
            {interpolatedStyles.map(config => (
              <div
                key={config.key}
                className="page"
                style={{ ...config.style }}
              >
                <Component {...config.data}/>
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )}/>
  )
}

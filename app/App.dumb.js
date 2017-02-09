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
import MenuLink from './MenuLink'

import emailValidator from '../utils/emailValidator'

import 'react-select/dist/react-select.css';
import '../styles/main.scss';

export default props => (
  <BrowserRouter>
    <div>
      <div className="top_menu">
        <MenuLink activeOnlyWhenExact={true} to="/">main info</MenuLink>
        <MenuLink to="/2">adress</MenuLink>
        <MenuLink to="/3">languages and occupation</MenuLink>
        <MenuLink to="/4">additional info</MenuLink>
      </div>
      <div id="main">
        <FadeRoute exact path="/" toPage={"/2"} component={FirstPage}/>
        <FadeRoute path="/2" toPage={"/3"} component={SecondPage}/>
        <FadeRoute path="/3" toPage={"/4"} component={ThirdPage}/>
        <FadeRoute path="/4" component={FourthPage}/>
      </div>
    </div>
  </BrowserRouter>
  )


const FadeRoute = ({ component: Component, toPage, ...rest }) => {
  const springConfig = {precision: 5, stiffness: 270, damping: 30}
  const willLeave = () => ({ zIndex: 1, opacity: spring(0), left: spring(-100) })
  const willEnter = () => ({ opacity: 0, left: 300 })

  return (
    <Route {...rest} children={({ location, match }) => (
      <TransitionMotion
        willEnter={willEnter}
        willLeave={willLeave}
        styles={match ? [ {
          key: location.pathname,
          style: { zIndex: 2, opacity: spring(1), left: spring(0, springConfig) },
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

                {toPage ? (<Link to={toPage} className="continue_link">
                      Continue
                </Link>) : null}
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )}/>
  )
}

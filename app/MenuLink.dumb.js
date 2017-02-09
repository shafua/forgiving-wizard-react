//MenuLink

import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

export default ({to, activeOnlyWhenExact, children}) => (
  <Route
    path={to} exact={activeOnlyWhenExact}
    children={({match}) => (
      <Link className={match ? 'active' : ''} to={to}>{children}</Link>
    )}
    />
)

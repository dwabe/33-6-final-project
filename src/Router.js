import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import User from './components/User';
import { NoMatch } from './components/NoMatch';
import { Cart } from './components/Cart';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/cart' component={Cart} />
    <Route exact path='/User' component={User} />
    <Route path='*' exact={true} component={NoMatch} />
  </Switch>
)

export default Router;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetail from './components/Movies/MovieDetail';

export const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={MovieDetail} />
    </Switch>
  )
};
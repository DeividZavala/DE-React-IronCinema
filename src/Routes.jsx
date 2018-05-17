import React from 'react';
import { Route, Switch } from "react-router-dom";
import MovieContainer from './components/MovieContainer';
import MovieDetail from './components/MovieDetail';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MovieContainer}/>
        <Route exact path='/:id' component={MovieDetail}/>
      </Switch>
    </div>
  );
};
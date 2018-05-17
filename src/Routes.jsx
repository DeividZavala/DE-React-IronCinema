import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './components/home/HomePage';
import MovieDetail from './components/movies/MovieDetail';

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/:id' component={MovieDetail}/>
        </Switch>
    )
};
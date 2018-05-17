import React from 'react';

import {Route, Switch} from 'react-router-dom'
//se importan rutas
import MyHomeComponent from './components/home/MyHomeComponent';
import MyMovieComponent from './components/characters/MyMovieComponent';

export const Routes = () =>{
    return(
        // Switch es el padre de la ruta
        <Switch>
            {/* path="cual es la ruta del navegador" component={el componente que renderizara} */}
            {/* siempre se tiene que usar exact, para que funcionen las rutas */}
            <Route exact path="/" component={MyHomeComponent} />
            <Route  path="/:id" MyMovieComponent={MyMovieComponent} />
        </Switch>
    )
}
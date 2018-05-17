import React, {Component} from 'react';
import MovieList from '../movies/MovieList';

class HomePage extends Component{
    render(){
        return(
            <div>
                <h1>Cinema</h1>
                <MovieList/>
            </div>
        );
    }
}

export default HomePage;

//done
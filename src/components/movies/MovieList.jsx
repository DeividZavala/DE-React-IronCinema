import React, {Component} from 'react';
import {Movie} from './Movie';

import {SampleMovies} from '../../sample-movies';

class MovieList extends Component{
    state={
        movies: SampleMovies,
    }

    render(){
        return(
            <div>
                <div style={styles.conFlex}>
                    {this.state.movies.map(movie=>{
                        return(
                            <Movie key={movie.id} movie={movie} {...movie}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const styles = {
    conFlex: {
        display: 'flex',
        flexWrap:'wrap',
    }
}

export default MovieList;

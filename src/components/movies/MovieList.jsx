import React, {Component} from 'react';
import {Movie} from './Movie';

import toastr from 'toastr';

import {SampleMovies} from '../../sample-movies';

class MovieList extends Component{
    state={
        movies: SampleMovies,
    }

    render(){
        return(
            <div>
                <div style={styles.conFlex}>
                    {this.state.movies.map(m=>{
                        return(
                            <Movie key={m.id} {...m}/>
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

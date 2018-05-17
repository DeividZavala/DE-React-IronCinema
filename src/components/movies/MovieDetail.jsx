import React from 'react';
import {SampleMovies} from '../../sample-movies';

class MovieDetail extends React.Component{
    state={
        movie: {}
    }

    render(){
        const {id, title, poster, synopsis, genres, year, director, actors} = this.state.movie;
        return(
            <div>
                <img src={poster} alt=""/>
                <p>{title}</p>
                <p>Genres: {genres}</p>
                <p>Year: {year}</p>
                <p>Director: {director}</p>
                <p>Actors: {actors}</p>
                <p>Synopsis: {synopsis}</p>
            </div>
        )
    }
}

export default MovieDetail;
import React from 'react';
import { MovieCard } from './MovieCard'

export const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map(movie=>{
        return <MovieCard key={movie.id} movie={movie}/>
      })}
    </div>
  );
};

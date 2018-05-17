import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';

export const Movie = ({id, original_title, poster_path, overview, release_date}) => {
  return (
    <div style={{margin:'10px', cursor:'pointer'}} >
      <Paper zDepth={4}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} style={{width:200, marginTop:50}} />
        <Link to={`/${id}`}> <h2>{original_title}</h2> </Link>
      </Paper>
    </div>
  );
};
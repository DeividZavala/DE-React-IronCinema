import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom'

const gridStyle = {
  width: '22%',
  textAlign: 'center',
  margin: '20px',
  height:'650px',
  cursor:'pointer',
  padding: '0'
};

export const MovieCard = ({movie}) => {
  return (
    <div>
      <Link to={`/${movie.id}`}>
      <Card.Grid style={gridStyle} >
      <img style={{width:'100%'}}src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
      <h1>{movie.title}</h1>
      <p style={{color:'black'}}>{movie.overview.slice(0,150)}...</p>
      </Card.Grid>
      </Link>
    </div>
  );
};
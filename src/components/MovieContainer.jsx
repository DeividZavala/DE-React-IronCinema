import React, { Component } from 'react';
import { MovieList } from './MovieList'
import { getMovies } from '../services/api'

class MovieContainer extends Component {
  state = {
    movies:[]
  }

  
  componentWillMount() {
    this.getMovies()
  }
  
  getMovies = ()=>{
    getMovies()
    .then(movies=>this.setState({movies}))
    .catch(e=>console.log(e))
  }

  render() {
    return (
      <div>
        <MovieList movies={this.state.movies}/>  
      </div>
    );
  }
}

export default MovieContainer;
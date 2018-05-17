import React from 'react';
import {Movie} from './Movie';
import {getMovies} from "../../services/api";

class Movies extends React.Component{

  state = {
    movies:[]
  };

  componentWillMount(){
    this.getMovies();
  }

  getMovies = () => {
    getMovies()
      .then(movies => {
        this.setState({movies});
      })
      .catch(e => console.log(e));
  };

  render(){
    return(
        <div>
          {this.state.movies.map(movies => {
            return (
              <Movie key={movies.id} {...movies} />
            );
          })}
        </div>
    );
  }
}

export default Movies;
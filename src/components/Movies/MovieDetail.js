import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {CircularProgress} from 'material-ui';
import {getMovie} from "../../services/api";

class MovieDetail extends Component{

  state = {
    movie: {},
    loading: true,
  };

  componentWillMount(){
    getMovie(this.props.match.params.id)
      .then(movie => {
        this.setState({movie, loading: false})
      })
      .catch(e => console.log(e));
  };

  handleClose = () =>{
    this.props.history.goBack();
  };

  render() {
    const {original_title, poster_path, overview, release_date} = this.state.movie;
    return (
      <div >
        <Dialog title={original_title} modal={false} open={true} onRequestClose={this.handleClose}>
          {this.state.loading ? <CircularProgress/> :
            <div>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} style={{width:100, height:150}}/>
              <p>{overview}</p>
              <p>{release_date}</p>
            </div>}
        </Dialog>
      </div>
    );
  }
}

export default MovieDetail;
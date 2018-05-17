import React, {Component} from 'react';
import { getMovieById } from "../services/api";
import { Modal } from 'antd';

class MovieDetail extends Component{
  state={
    movie:{},
    visible:this.props.visible
  }

  handleCancel = () => {
    this.props.history.goBack()
  }
  componentWillMount() {
    getMovieById(this.props.match.params.id)
    .then(m=>this.setState({movie:m}))
    .catch(e=>console.log(e))
  }
  
  render(){
    const movie = this.state.movie
  return (
    <div>
      <Modal
          title={movie.title}
          visible={true}
          onCancel={this.handleClose}
          onOk={this.handleClose}
          maskClosable={true}
          style={{display:'flex',flexDirection:'row'}}
          width={'80%'}
          >
          <div style={{display:'flex'}}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
            <div style={{margin:'30px'}}>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
            
          </div>

      </Modal>

    </div>
  );
}
};

export default MovieDetail
const url = `https://api.themoviedb.org/3/movie/`

export function getMovies(){
  return fetch(url+'now_playing?api_key=f8243124feef6665d24e42bf381389bc')
      .then(r=>{
        if(!r.ok)throw r.statusText;
        return r.json();
    })
      .then(movies=>{
          return movies.results;
      });
}

export function getMovieById(id){
  return fetch(url+id+'?api_key=f8243124feef6665d24e42bf381389bc')
      .then(r=>{
          if(!r.ok)throw r.statusText;
          return r.json();
      })
      .then(movies=>{
          return movies;
      });
}
const url = 'https://api.themoviedb.org/3/genre/18/movies?api_key=82b5663c68f2ad62437a48269129ca36&language=en-US&include_adult=false&sort_by=created_at.asc/';


export function getMovies(){
  return fetch(url)
    .then(r => {
      if(!r.ok) return Promise.reject(r.statusText);
      return r.json();
    })
    .then(movies=>{
      return movies.results;
    });
}

export function getMovie(id){
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=82b5663c68f2ad62437a48269129ca36&language=en-US`)
    .then(r=>{
      if(!r.ok) return Promise.reject(r.statusText);
      return r.json();
    })
    .then(movie => {
      console.log(movie);
      return movie;
    });
}
// const ?? = esto queda pendiente

export function getMovies(){
    //devolver un fetch con sus respectivos then
    return fetch(url)
    .then(r=>{
        //  1ra manera - throw se usa en lugar de return. Arroja un error
        // if (!r.ok) throw r.statusText;
        if (!r.ok) return Promise.reject(r.statusText)
        return r.json()
    })
    .then(characters=>{
        return characters;
    })
}

export function getMovie(id){
    return fetch(url + id)
    .then(r=>{
        if (!r.ok) return Promise.reject(r.statusText)
        return r.json()
    })
    .then(character=>{
        return character;
    })
}
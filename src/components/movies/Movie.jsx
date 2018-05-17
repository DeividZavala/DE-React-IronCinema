import React from 'react';
//paper?
import {Link} from 'react-router-dom';

export const Movie = ({id, title, poster}) =>{
    return(
        <div style={{margin:'20px', cursor:'pointer', width:'15%'}}>
           <Link to={`/${id}`}>
                <img src={poster} style={{width:100}} alt=""/>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

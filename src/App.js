import React from "react";  
import {useEffect, useState} from 'react'

import './App.css';
import SearchICon from './search.svg'
import MovieCard from "./MovieCard";

//api key: 146f65d8
const API_URL = 'https://omdbapi.com?apikey=146f65d8'

const App = () => {

    // states:
    // initialise movies as empty []
    // setMovies to update the state
    const [movies, setMovies] = useState([]); 
    // initialise useState as ''
    // update use setSearchStr  
    const [searchStr, setSearchStr] = useState('');

    // asyn function to fetch movies using API call
    const searchMovies = async (title) => {
        const resp = await fetch (`${API_URL}&s=${title}`)
        const data = await resp.json();
        setMovies(data.Search);
    }

    // it call the searchMovies function whenever the SearchStr change
    useEffect(()=>
    {
        searchMovies(searchStr);

    },[searchStr]); // if empty [] dependencies is for the function to run it once.

    return(
        <div className="app">
            <h1>MoviveHub</h1>
            <div className="search">
                <input placeholder="Search for Movies" value={searchStr} onChange={(event)=>{setSearchStr(event.target.value)}}/>
                <img  src={SearchICon} alt="searchICon" onClick={()=>{searchMovies(searchStr)}}/>
            </div>

            {
                movies?.length>0 ? 
                <div className="container">
                    {movies.map((moive)=>(
                        <MovieCard moiveObj={moive}/>
                    ))}
                </div> :
                 <div className="empty">
                    <p>no movie found</p>
                </div>
            }
        </div>
    )
}

export default App;
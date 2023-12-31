import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieCard = () => {
    const movies=useSelector(store=>store.movies);
  return (
    <div>
        <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
      
    </div>
  )
}

export default MovieCard

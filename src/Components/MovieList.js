import React, { useEffect, useState } from 'react';
import { debounce } from '../utils/debounce';
import MovieCard from './Movie';

const MovieList = () => {
  const [inputMovie, setInputMovie] = useState('');
  const [movies, setMovies] = useState([]);
 
  const debouncedSearch = debounce(async (name) => {
    let result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=263e31d1ad0c4defa8822787e614e716&language=en-US&query=${name}&page=1&include_adult=true`);
    let response = await result.json();
    setMovies(response.results);
  }, 500); 
 

  const onSearchInputChange = (e) => {
    const value = e.target.value;
    setInputMovie(value);
    
    debouncedSearch(value);
  };

  return (
    <>
      <div className='movie_wrapper'>
        <div className='movie_joveo_header'>Joveo Movies</div>
        <div>
          <input className='movie_input_bar' type='text' value={inputMovie} onChange={onSearchInputChange}></input>
        </div>
        <div className='movie_list'>
        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                adult={movie.adult}
                overview={movie.overview}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                title={movie.title}
                vote_average={movie.vote_average}
            /> 
            ))}
          </div>
      </div>
    </>
  );
};

export default MovieList;

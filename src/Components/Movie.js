import React from 'react';

const MovieCard = ({ adult, overview,  poster_path, release_date, title,  vote_average}) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>Release Date: {release_date}</p>
        <p>Rating: {vote_average}</p>
        {adult && <p>Adult</p>}
      </div>
    </div>
  );
};

export default MovieCard;

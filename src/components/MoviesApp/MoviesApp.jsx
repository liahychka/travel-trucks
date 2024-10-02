import React from 'react'
import { useEffect, useState } from 'react';
import { fetchMovie } from '../../services/api';
import { Link } from 'react-router-dom';

const MoviesApp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const data = await fetchMovie();
      setMovies(data.results);
    };
    getAllMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => (
            <li key={movie.id}>
            <Link to={movie.id.toString()} >
               <p>{movie.title}</p>     
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesApp;
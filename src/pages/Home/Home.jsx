import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import { fetchMovie } from '../../services/api';

const Home = () => {

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
        <h2>Trending today</h2>
      <MovieList />      
      </div>

  )
}

export default Home
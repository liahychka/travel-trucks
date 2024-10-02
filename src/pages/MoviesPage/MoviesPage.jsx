import React, { useState } from 'react'
import { NavLink, Link, useParams } from "react-router-dom";
import SearchMovie from '../../components/SearchMovie/SearchMovie';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const filtredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

  const handeChangeQuery = newQuery => {
    setQuery(newQuery);
  }

  return (
    <div>
      <SearchMovie handeChangeQuery={handeChangeQuery} />
          <ul>
        {filtredMovies.map(movie => (
            <li key={movie.id.toString()}>
               <p>{movie.title}</p>     
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesPage


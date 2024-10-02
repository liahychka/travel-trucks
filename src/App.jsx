import { Route, Routes } from "react-router-dom";
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFound from './pages/NotFound/NotFound';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import MovieReviews from './components/MovieReviews/MovieReviews';
import MovieCast from './components/MovieCast/MovieCast';


const App = () => {
  return (
      <div>
         <Navigation />
          <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />}/>
        </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}


export default App;


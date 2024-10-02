import { Route, Routes } from "react-router-dom";
import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Reviews from './components/Reviews/Reviews';
import Cast from './components/Cast/Cast';


const App = () => {
  return (
      <div>
         <Header />
          <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />}/>
        </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}


export default App;


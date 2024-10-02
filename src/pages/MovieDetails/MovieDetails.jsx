import React, { Suspense, useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            const data = await fetchMovieById(movieId);
            data.poster = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
            setMovie(data);
        };

        getDetails();
    }, [movieId]);

    if (!movie) {
        return 'Loading...'
    }
    return (
        <div>
            <div className={css.boxPage}>
            <div className={css.divPosterBtn}>
            <button className={css.btn} >← Go back</button>
            {movie && <img className={css.imgPoster} src={movie.poster} alt={movie.title} />} 
            </div>

            <div>
                <h2>{movie ? movie.title : ''} ({movie.release_date.slice(0, 4)}) </h2>
                <p>User score: {movie ? movie.popularity : ''}</p>
                    <h3>Overview</h3>
                    <p>{movie ? movie.overview : ''}</p>
                    <h3>Genres</h3>    
                    <p>{movie && movie.genres.length > 0 ? movie.genres.map(genre => genre.name).join(', ') : ''}</p>    
            </div>                
            </div>


            <hr />
            <p>Additional information</p>
            <div>
                <NavLink className={css.linkNav} to='cast' > <li>Cast</li> </NavLink>
                <NavLink className={css.linkNav} to='reviews' > <li>Reviews </li></NavLink>                
            </div>
            <hr />
            <Suspense>
                <Outlet />
            </Suspense>
            
        </div>
    );
}

export default MovieDetails;


import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';

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
            <h2>{movie ? movie.title : ''} ({movie.release_date.slice(0, 4)}) </h2>
            {movie && <img src={movie.poster} alt={movie.title} />}
            <p>User score: {movie ? movie.popularity : ''}</p>
            <p>Overview: {movie ? movie.overview : ''}</p>
            <p>Genres: {movie && movie.genres.length > 0 ? movie.genres.map(genre => genre.name).join(', ') : ''}</p>
            <hr />
            <p>Additional information</p>
            <div>
                <NavLink to='cast' >Cast</NavLink>
                <NavLink to='reviews' >Reviews</NavLink>                
            </div>
            <Outlet />
        </div>
    );
}

export default MovieDetails;


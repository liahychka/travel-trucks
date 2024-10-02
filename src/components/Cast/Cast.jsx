import React, { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();
    const [castMovie, setcastMovie] = useState([]);

    // console.log(castMovie);

    useEffect(() => {
        const getCast = async () => {
            const data = await fetchMovieCast(movieId);
            setcastMovie(data);
        };

        getCast();
    }, [movieId]);

 if (castMovie.length === 0) {
    return <p>There are no info about cast</p>;
  } else {
    return (
      <>
        <ul className={css.list}>
          {castMovie.map(({ id, name, profile_path }) => {
            if (profile_path) {
              return (
                <li key={id} className={css.item}>
                  <img
                    src={baseUrl + profile_path}
                    alt={name}
                    className={css.img}
                  />
                  <p className="text"> {name}</p>
                </li>
              );
            }
          })}
        </ul>
        {error && <h2>Something went wrong ...</h2>}
      </>
    );
  }
};


export default Cast;

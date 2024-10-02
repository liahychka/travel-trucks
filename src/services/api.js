import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzljMjRjNzRhOTI1MGE0OTQ5N2FiMzFiNzA4ODZjMSIsIm5iZiI6MTcyNzcyMjg5NC42MTkyNDksInN1YiI6IjY2ZmFjNDdmM2EwZjVhMDhjOGYxOTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iJTxyONf3SgpKOGDBLrO36peCKNtCxKLIMaplw9hWYo'
    },
};

export const fetchMovie = async () => {
    const response = await axios.get('trending/movie/day', options)
    return response.data;
};

export const fetchMovieById = async (movieId) => {
    const response = await axios.get(`movie/${movieId}`, options)
    return response.data;
};
 
export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits`, options)
    return response.data;
};
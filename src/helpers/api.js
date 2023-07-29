import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzkzMGZmOGVjN2Y3MDIzMzQ2OTRhMjgyMWM2M2Q4MyIsInN1YiI6IjY0YzQyNzJiZWMwYzU4MDBlODBiMjI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gnPmaXvRcXQrh2jdHCD7pTM-2igyCL7PyWdhAbgcU5A',
  },
};

const fetchFavoriteMovies = async () => {
  try {
    const response = await axios.get(
      'trending/all/day?language=en-US',
      options
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchSearchForMovies = async query => {
  try {
    const response = await axios.get(`search/movie?query=${query}`, options);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchCredits = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, options);
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};
const fetchReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchFavoriteMovies,
  fetchMovieDetails,
  fetchSearchForMovies,
  fetchCredits,
  fetchReviews,
};

import axios from 'axios';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzVlYmZjOGZkMWM2MWQ5MWJlN2FlNTVhMGVmM2E2MSIsInN1YiI6IjY0ODFiNWNiNjQ3NjU0MDEyNDk3MGQzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3215WRy5xLM7EaHoA7mSNicq_FEcMJVAtrDLqSZgqNM',
  },
};

export const fetchTrendingMovies = async () => {
  const result = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    options
  );

  const results = result.data.results;
  const movieList = results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
    };
  });
  return movieList;
};

export const searchForMovies = async movieName => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
    options
  );

  const results = result.data.results;
  const searchResults = results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
    };
  });
  return searchResults;
};

export const getMovieDetails = async movieId => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );

  const movieDetails = result.data;
  return {
    moviePoster: movieDetails.poster_path,
    movieTitle: movieDetails.title,
    movieReleaseDate: new Date(movieDetails.release_date).getFullYear(),
    movieOverview: movieDetails.overview,
    movieGenres: movieDetails.genres
      .map(movieGenre => {
        return movieGenre.name;
      })
      .join(' '),
  };
};

export const getMovieCast = async movieId => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );

  const movieCastDetails = result.data.cast;
  const castList = movieCastDetails.map(listItem => {
    return {
      id: listItem.id,
      profileImage: listItem.profile_path,
      actorName: listItem.name,
      character: listItem.character,
    };
  });
  return castList;
};

export const getMovieReviews = async movieId => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );

  const movieReviews = result.data.results;
  const searchResults = movieReviews.map(movieReview => {
    return {
      id: movieReview.id,
      author: movieReview.author,
      content: movieReview.content,
    };
  });
  return searchResults;
};

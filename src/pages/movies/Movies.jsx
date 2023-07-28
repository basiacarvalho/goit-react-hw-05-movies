import { SearchBar } from 'components/searchbar/SearchBar';
import { SearchMovieList } from 'components/searchmovielist/SearchMovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchForMovies } from 'utils';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (movieName === null) return;

    async function fetchMoviesByName() {
      const results = await searchForMovies(movieName);
      console.log(results);
      setSearchResults(results);
    }

    fetchMoviesByName();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movieName.value });
    form.reset();
  };

  return (
    <main>
      <SearchBar handleSubmit={handleSubmit} />
      <SearchMovieList searchResults={searchResults} />
    </main>
  );
};

export default Movies;

import { SearchBar } from 'components/searchbar/SearchBar';
import { useState } from 'react';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main>
      <SearchBar />
    </main>
  );
};

export default Movies;

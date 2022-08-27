import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import catWiki from '../../api/catsWiki';
import SuggestionBox from './SuggestionBox';

function SearchBar({ placeholderText }) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [search, setSearch] = useState('');

  const {
    isLoading, error, data: suggestions,
  } = useQuery(['allBreeds'], () => axios
    .get(`${catWiki}/cats/breeds/all`)
    .then((res) => res.data), {
    refetchOnWindowFocus: false,
  });

  const openSuggestion = () => {
    setIsBoxOpen(true);
  };

  const hideSuggestion = () => {
    setIsBoxOpen(false);
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  if (isLoading) return <div>Loading sayang...</div>;

  if (error) return <div>Error sayang...</div>;

  let filteredSuggestion = suggestions;
  if (search !== '') {
    filteredSuggestion = suggestions.filter(
      (breed) => breed.name
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }

  return (
    <div>
      <div className="flex items-center">
        <input type="text" className="rounded-full p-4 md:w-64 text-black" placeholder={placeholderText} onFocus={openSuggestion} onBlur={hideSuggestion} onChange={(e) => handleSearch(e.target.value)} value={search} />
        <svg fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 absolute left-56 md:left-94"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      {isBoxOpen && <SuggestionBox keyword={search} suggestions={filteredSuggestion} /> }
    </div>
  );
}

export default SearchBar;

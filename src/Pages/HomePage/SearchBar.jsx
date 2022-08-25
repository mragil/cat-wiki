import { useState } from 'react';
import SuggestionBox from './SuggestionBox';

function SearchBar({ placeholderText }) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const openSuggestion = () => {
    setIsBoxOpen(true);
  };

  const hideSuggestion = () => {
    setIsBoxOpen(false);
  };

  return (
    <div>
      <div className="flex items-center">
        <input type="text" className="rounded-full p-4 md:w-64" placeholder={placeholderText} onFocus={openSuggestion} onBlur={hideSuggestion} />
        <svg fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 absolute left-56 md:left-94"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      {isBoxOpen && <SuggestionBox /> }
    </div>
  );
}

export default SearchBar;

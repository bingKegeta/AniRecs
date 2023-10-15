import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
        console.log(searchTerm, "searched");
    }
    setIsSearched(true);
    // TODO: Display the cards here or somewhere else not sure
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const onFocus = () => {
      setIsExpanded(true);
  };

  const onBlur = () => {
    setIsExpanded(false);
  }


  return (
    <div className='full-bar'>
        <div className={`search-bar ${isExpanded ? 'expanded' : isSearched ? 'searched' : ''}`}>
            <div className="search-input" onFocus={onFocus} onBlur={onBlur}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleSearch}>Go</button>
            </div>
        </div>
    </div>
  );
};

export default SearchBar;

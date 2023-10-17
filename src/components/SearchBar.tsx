import React, { useState } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  text: string,
  onSearch: (query: string) => void
}

const SearchBar = ({text, onSearch}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
        console.log(searchTerm, "searched");
        onSearch(searchTerm)
    }
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
        <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
            <div className="search-input" onFocus={onFocus} onBlur={onBlur}>
                <input
                    type="text"
                    placeholder={text}
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

import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
          <input
          type='search' 
          placeholder='search model...'
          onChange={searchChange}
          />
        </div>
    );
}

export default SearchBox;
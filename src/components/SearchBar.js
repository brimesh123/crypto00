import React from 'react';

function SearchBar({ onChange }) {
    return (
       <div class="search"><input
            type="text"
            placeholder="Search for a cryptocurrency..."
            onChange={e => onChange(e.target.value)}
            style={{ padding: '10px', width: '300px', margin: '20px 0', fontSize: '16px' }}
        /></div> 
    );
}

export default SearchBar;

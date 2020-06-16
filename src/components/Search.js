import React from 'react';

// I destructured the handleInput method to avoid using props keyword
const Search = ( { handleInput, search }) => {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for a movie" 
                className="searchbox"
                onChange={handleInput} 
                onKeyPress={search}
            />
        </section>
    )
}

export default Search;
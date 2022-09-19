import React from 'react';

const SearchContext = React.createContext({
    searchInput: '',
    onChangeSearchInput: () => {},
})

export default SearchContext;
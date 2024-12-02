import React from 'react';

import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        console.log('Escribiste en el TodoSearch');
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };

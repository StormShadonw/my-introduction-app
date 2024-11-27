import React from 'react';

import './TodoSearch.css';

function TodoSearch(props) {

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={props.searchValue}
      onChange={(event) => {
        console.log('Escribiste en el TodoSearch');
        props.setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };

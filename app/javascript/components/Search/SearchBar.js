import React from 'react';

const SearchBar = () => {
return(
  <div className="container">
    <form className="form-inline" style={{ marginBottom: `${2}em`, padding: `${0}px ${10}px` }}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search eg.Fruits" aria-label="Search" />
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
)
}
export default SearchBar

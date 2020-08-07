import React from 'react';

const SearchBar = () => {
return(
  <div className="container" style={{ paddingRight: `${0}px`, paddingLeft: `${0}px` }}>
    <form className="form-inline" style={{ marginBottom: `${2}em`}}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search eg.Fruits" aria-label="Search" />
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
)
}
export default SearchBar

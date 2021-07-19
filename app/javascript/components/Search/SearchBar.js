import React from 'react';

const SearchBar = () => {
return <>
  <section className="container" style={{ paddingRight: `${0}px`, paddingLeft: `${0}px` }}>
    <form style={{ marginBottom: `${2}em`}}>
      <div className="form-group">
        <label for='search-form'>Search for your favourite shop or product</label>
        <input 
          className="form-control" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
          name='search-form'/>
      </div>
      
      {/* <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button> */}
    </form>
  </section>
</>
}
export default SearchBar

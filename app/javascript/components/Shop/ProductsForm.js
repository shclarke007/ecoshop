import React from 'react';

const ProductForm = (props)=> {
  return(
    <div className="wrapper">
      <form>
        <div></div>
        <div className="field">
          <input type="text"/>
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Product description"/>
        </div>
      </form>

    </div>
  )
}

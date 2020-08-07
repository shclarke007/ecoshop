import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <div className="card mb-3" style={{ maxWidth: `${550}px` }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="https://picsum.photos/100" className="card-img" alt="product image" />
        </div>
          <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{props.attributes.category_name}</h5>
            <p className="card-text">{props.attributes.description}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Product

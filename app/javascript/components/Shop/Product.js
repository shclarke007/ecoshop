import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Product = (props) => {
  return <>
    <p className="product-title">{props.attributes.category_name} </p>
  </>
}

export default Product

import React from "react";
import PageHeader from '../Shops/PageHeader';
import Product from '../Shop/Product';

const Header = (props) => {
  const {name, image_url, address_1, address_2, town, city, website} = props.attributes;
  const total = props.products.length;
  const grid = props.products.map(item => {
    return (
      <Product
        key={item.id}
        attributes={item.attributes}
      />
      // console.log(item.attributes)
    )
  });
  return (
    <div>
      <PageHeader />
      <div className="container">
        <h1>{name}</h1>
        <h2>{total} Categories of Products Available</h2>
        <div>{grid}</div>

      </div>
    </div>
  )
}

export default Header

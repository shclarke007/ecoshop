import React from "react";

const Header = (props) => {
  const {name, image_url, address_1, address_2, town, city, website} = props.attributes;
  // console.log(props.products);
  const total = props.products.length;

  return (
    <div className="wrapper">
      <h1><img src={image_url} alt={name}/>{name}</h1>
      <div>
      <div className="total-products">{total} Types of Products Available</div>
      {/* <div className="products">{props.products}</div> */}
      </div>
    </div>
  )

}

export default Header

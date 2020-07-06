import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`;

const ProductCount = styled.div`
  font-size: 0.8em;
  padding:10px 0;
`;

const Header = (props) => {
  const {name, image_url, address_1, address_2, town, city, website} = props.attributes;
  // console.log(props.products);
  const total = props.products.length;

  return (
    <Wrapper>
      <h1><img src={image_url} alt={name} />{name}</h1>
      <div>
        <ProductCount>{total} Categories of Products Available</ProductCount>
        <div className="products">Products goes here</div>
      </div>
    </Wrapper>
  )

}

export default Header

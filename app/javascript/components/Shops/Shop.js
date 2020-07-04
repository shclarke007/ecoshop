import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  color: #4C5656;
  &:hover{
    background-color: #b8f9d363;
    border: 1px solid #b8f9d363;
    transform: translateY(-5px) scale(1.005) translateZ(0)
    box-shadow: 0 15px 24px rgba(0,0,0,0.11),
    0 15px 24px;
  }
`;

const ShopImage = styled.div`
   height: 100px;
  img {
    height: 100px;
    width: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
  }
`;

const ShopName = styled.div`
  h3{
    font-weight: 600;
    font-size: 1.1em;
  }
`;

const ShopInfo = styled.div`
  p{
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Title = styled.h4`
  margin-bottom: 0.5em;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  a {
    color: #fff;
    background-color: #19CACA;
    border: 1px solid #19CACA;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 50px;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: rgb(25, 153, 166);
      background: rgb(25, 153, 166);
    }
  }
`;

const Shop = (props) => {
  return (
    <Card>
      <ShopImage><img src={props.attributes.image_url} alt={props.attributes.name} /></ShopImage>
      <ShopName><h3>{props.attributes.name}</h3></ShopName>
      <Title>Address:</Title>
      <ShopInfo><p>{props.attributes.address_1}</p></ShopInfo>
      <ShopInfo><p>{props.attributes.address_2}</p></ShopInfo>
      <ShopInfo><p>{props.attributes.city}</p></ShopInfo>
      <ShopInfo><p>{props.attributes.post_code}</p></ShopInfo>
      <Title>Website:</Title>
      <a href={`${props.attributes.website}`} target="_blank">{props.attributes.website}</a>
      <LinkWrapper>
        <Link to={`/shops/${props.attributes.id}`}>View Shop</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Shop

import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`
const ShopImage = styled.div`
   height: 100px;
  img {
    height: 100px;
    width: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
  }
`
const ShopName = styled.p`
  font-weight: 600;
`
const ShopInfo = styled.p`
  font-weight: 300;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  a {
    color: #fff;
    background-color: rgb(25, 153, 166);
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 50px;
    border: 1px solid rgb(25, 153, 166);
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: #f60f60;
      background: #f60f60;
    }
  }
`

const Shop = (props) => {
  return (
    <Card>
      <ShopImage>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </ShopImage>
      <ShopName>{props.attributes.name}</ShopName>
      <ShopInfo>{props.attributes.address_1}</ShopInfo>
      <ShopInfo>{props.attributes.address_2}</ShopInfo>
      <ShopInfo>{props.attributes.town}</ShopInfo>
      <ShopInfo>{props.attributes.city}</ShopInfo>
      <ShopInfo>{props.attributes.post_code}</ShopInfo>
      <LinkWrapper>
        <Link to={`/shops/${props.attributes.id}`}>View Shop</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Shop

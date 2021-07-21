import React from "react";
import PageHeader from '../Shops/PageHeader';
import Product from './Product';
import ProductsForm from './ProductsForm';
import SearchBar from "../Search/SearchBar";
import Jumbotron from "../Jumbotron";
// import ShopItemData from "./ShopItemData";

const ShopItem = (props) => {
  const {name, image_url, address_1, address_2, town, city, website} = props.attributes;
  const total = props.products.length;
  const grid = props.products.map(item => {
    return (
      <Product
        key={item.id}
        attributes={item.attributes}
      />
    )
  });
  return <>
    <PageHeader />
    <Jumbotron />
    <SearchBar />
    <div>
      <ProductsForm />
    </div>
    <br />
    <section className="shop">
      <div className="section-center">
        <article className="shop-img">
          <img src={image_url} style={{width: '50%'}}/>
        </article>
        <article className="shop-info">
          <div className="shop-name"> 
            <h2>{name}</h2>
            <div className="underline"></div>
          </div>
          <div>
            <p>{address_1}</p>
            <p>{address_2}</p>
            <p>{town}</p>
          </div>
          <div className="shop-product">
            <h2>Products: </h2> 
            <div className="underline"></div>
            {grid}
          </div>
        </article>
      </div>
    </section>
    </>
}

export default ShopItem

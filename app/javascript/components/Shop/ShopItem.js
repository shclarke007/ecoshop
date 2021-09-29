import React from "react";
import Nav from '../Shops/Nav';
import Product from './Product';
import ProductsForm from './ProductsForm';
import SearchBar from "../Search/SearchBar";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer/Footer";
// import ShopItemData from "./ShopItemData";

const ShopItem = (props) => {
  const {name, image_url, address_1, address_2, town, city, website, post_code} = props.attributes;
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
    <Nav />
    <Jumbotron />
    <SearchBar />
    <ProductsForm />
    <br />
    <section className="shop">
      <div className="section-center">
        <article className="shop-img">
          <img src={image_url} style={{width: '350px'}}/>
        </article>
        <article className="shop-info">
          <div className="shop-name"> 
            <h2>{name}</h2>
            <div className="underline"></div>
          </div>
          <div>
            <p className="shop_address">{address_1}</p>
            <p className="shop_address">{address_2}</p>
            <p className="shop_address">{town}</p>
            <p className="shop_address strong">{city}</p>
            <p>{post_code}</p>
            <a href={`${website}`} target="_blank" className="btn btn-info" style={{marginRight: `${1}em`}}>Website</a>
            {/* <button target="_blank" className="btn btn-primary">Directions</button> */}
          </div>
          <div className="shop-product">
            <h3>Products </h3><span>({total})</span> 
            <div className="underline"></div>
            {grid}
          </div>
        </article>
      </div>
    </section>
    <Footer />
    </>
}

export default ShopItem

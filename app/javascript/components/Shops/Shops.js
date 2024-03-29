import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ShopDetails from './ShopDetails';
import Nav from '../Nav/Nav';
import Jumbtron from '../Jumbotron';
import SearchBar from '../Search/SearchBar';
import Footer from '../Footer/Footer';

const Shops = () => {
  const [shops, setShops] = useState([]);
  const getShops = () =>{
    const url = '/api/v1/shops.json'
    axios.get(url)
      .then(res => {
        setShops(res.data.data);
      })
      .catch(res => console.log(res));
  }

  useEffect(() => {
    getShops();
  }, [shops.length]);

  const shopsGrid = shops.map(item => {
    return (
      <ShopDetails
        key={item.id}
        attributes={item.attributes}
      />
    )
  });
  return <>
    <Nav />
    <Jumbtron />
  
    <section className="container">
      <div className="row">
        {shopsGrid}
      </div>
    </section>
    
    <Footer />
    </>
}

export default Shops

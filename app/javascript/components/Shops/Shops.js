import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ShopDetails from './ShopDetails';
// import ShopForm from '../Shops/ShopsForm';
import PageHeader from '../Shops/PageHeader';
import Jumbtron from '../Jumbotron';
import SearchBar from '../Search/SearchBar';

const Shops = () => {
  const [shops, setShops] = useState([]);
  // const [shop, setShop] = useState({});

  useEffect(() => {
    const url = '/api/v1/shops.json'
    axios.get(url)
      .then(res => {
        setShops(res.data.data);
      })
      .catch(res => console.log(res));
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
      <PageHeader />
      <Jumbtron />
      <SearchBar />

      <section className="container">
        <div className="row">
          {shopsGrid}
        </div>
          {/* <div className="col">
              <ShopForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={shops.attributes}
              />
          </div> */}
      </section>
    </>
}

export default Shops

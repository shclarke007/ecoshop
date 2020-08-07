import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Shop from './Shop';
import ShopForm from '../Shops/ShopsForm';
import PageHeader from '../Shops/PageHeader';
import Jumbtron from '../Shop/Jumbotron';
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

  const grid = shops.map(item => {
    return (
      <Shop
        key={item.id}
        attributes={item.attributes}
      />
    )
  });
  return (
    <div>
      <PageHeader />
      <Jumbtron />
      <div style={{ paddingRight: `${15}px`, paddingLeft: `${15}px` }}>
        <SearchBar />
      </div>

      <section className="container">
        <div className="row">
          {grid}
        </div>
          {/* <div className="col">
              <ShopForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={shops.attributes}
              />
          </div> */}
      </section>
    </div>
  )
}

export default Shops

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Shop from './Shop';
import ShopForm from '../Shops/ShopsForm';
import PageHeader from '../Shops/PageHeader';

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [shop, setShop] = useState({});

  useEffect(() => {
    axios.get('/api/v1/shops.json')
      .then(res => {
        setShops(res.data.data);
      })
      .catch(res => console.log(res));
  }, [shops.length]);

  // const handleChange = (e) => {
  //   e.preventDefault;
  //   // console.log('name:', e.target.name, 'value:', e.target.value);
  //   setShop(Object.assign({}, shop, { [e.target.name]: e.target.value }));
  //   console.log(shop);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault;
  //   console.log(e.target, 'value:', e.target.value);
  // };

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
      <section className="container" >
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

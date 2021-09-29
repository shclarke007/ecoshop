import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ShopItem from './ShopItem';

const ShopItemData = (props) => {
  const [shop, setShop] = useState({});
  // const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    const id = props.match.params.id;
    const url = `/api/v1/shops/${id}`;

    axios.get(url)
      .then(res => {
        setShop(res.data);
        // console.log(res.data);
        setLoaded(true);
      })
      .catch(res => console.log(res));
  }, [shop]);

  // const handleChange = (e)=>{
  //   e.preventDefault;
  //   // console.log('name:', e.target.name, 'value:', e.target.value);
  //   setProduct(Object.assign({}, product, {[e.target.name]: e.target.value}))
  //   console.log('product:', product)
  // };
  // const handleSubmit = (e)=>{
  //   e.preventDefault;
  // };

  return (
    <section>
      {
        loaded &&
        <>
          <div className="container" style={{ padding: `${0}px` }}>
            <div>
              <ShopItem
                attributes={shop.data.attributes}
                products={shop.included}
              />
            </div>
          </div>
        </>
      }
    </section>
  )
}

export default ShopItemData

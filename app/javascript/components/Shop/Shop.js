import React, { useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Header from './Header';

const Shop = (props) => {
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
  }, []);

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
        <Fragment>
          <div className="container" style={{ padding: `${0}px` }}>
            <div>
              <Header
                attributes={shop.data.attributes}
                products={shop.included}
              />
            </div>
          </div>
        </Fragment>
      }
    </section>
  )
}

export default Shop

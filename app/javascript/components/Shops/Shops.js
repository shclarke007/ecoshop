import React, { useState, useEffect, Fragment} from 'react';
import axios from 'axios';

const Shops = () => {
  const [shops, setShops] = useState([])

  useEffect(()=>{
    axios.get('/api/v1/shops.json')
    .then( res => {
      setShops(res.data.data);
    } )
    .catch( res => console.log(res));
  }, [shops.length]);

  const list = shops.map(item => {
    return (<li key={item.attributes.name}>{item.attributes.name} </li>)
  })
  return (
    <Fragment>
      <div>Shops index view for app</div>
      <ul>
        <li>{list}</li>
      </ul>

    </Fragment>


  )
}

export default Shops

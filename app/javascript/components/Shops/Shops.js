import React, { useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Shop from './Shop';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  min-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div `
  text-align: left;
  h1 {
    font-size: 3em;
  }
`;
const Subheader = styled.p`
  font-weight:300;
  font-size: 1em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`;
const Shops = () => {
  const [shops, setShops] = useState([]);

  useEffect(()=>{
    axios.get('/api/v1/shops.json')
    .then( res => {
      setShops(res.data.data);
      console.log(res.data.data)
    } )
    .catch( res => console.log(res));
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
    <Home >
      <Header>
        <h1>Eco Shopping</h1>
        <Subheader>Eco friendly shopping. Find shops that use little or no plastic packaging</Subheader>
      </Header>
      <Grid>

          {grid}

      </Grid>

    </Home>


  )
}

export default Shops

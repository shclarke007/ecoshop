import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Shop from './Shop';
import styled from 'styled-components';
import ShopForm from '../Shops/ShopsForm';

const Home = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  color: #4C5656;
  overflow-x: hidden;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  color: #fff;
  background-color: #19CACA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 3em;
    text-align: left;
    padding: 20px;
    margin: 0;

  }
  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Subheader = styled.p`
  font-weight:300;
  font-size: 1em;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  width: 100%;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
`;

const Column = styled.div`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;
  &:last-child {
    background: #f7f7f7;
  }
`;

const Main = styled.div`
  left-padding: 50px;
`;

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

  const handleChange = (e) => {
    e.preventDefault;
    // console.log('name:', e.target.name, 'value:', e.target.value);
    setShop(Object.assign({}, shop, { [e.target.name]: e.target.value }));
    console.log(shop);
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(e.target, 'value:', e.target.value);
  };

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
        <ul>
          <li>Home</li>
          <li>Shops</li>
          <li>Learn More</li>
        </ul>
      </Header>
      <Subheader>Eco friendly shopping. Find shops that use little or no plastic packaging</Subheader>
      <Wrapper>
        <Column>
          <Grid>
            {grid}
          </Grid>
        </Column>
        <Column>
          <ShopForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            attributes={shops.attributes}
          />
        </Column>
      </Wrapper>
    </Home>


  )
}

export default Shops

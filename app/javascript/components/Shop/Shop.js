import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Header';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

`;
const Column = styled.div`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // &:last-child {
  //   background: #000;
  // }
`;
const Main = styled.div`
  left-padding: 50px;
`;

const Shop = (props) => {
  const [shop, setShop] = useState({});
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    const id = props.match.params.id;
    const url = `/api/v1/shops/${id}`;

    axios.get(url)
      .then(res => {
        setShop(res.data);
        console.log(res.data);
        setLoaded(true);
      })
      .catch(res => console.log(res));
  }, []);

  return (
    <Wrapper>
      <Column>
        <Main>
          {
            loaded &&
            <Header
            attributes={shop.data.attributes}
            products={shop.included}
            />
          }
        </Main>
      <div className="products"></div>
      </Column>
      {/* <Column>
        <div className="product-form">Add Product Form Goes Here</div>
      </Column> */}
    </Wrapper>
  )
}

export default Shop

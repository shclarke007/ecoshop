import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
const Column = styled.div`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;

const ButtonWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  button {
    font-size: 0.8em;
    color: #fff;
    background-color: #19CACA;
    border: 1px solid #19CACA;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 50px;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: auto;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: rgb(25, 153, 166);
      background: rgb(25, 153, 166);
    }
  }
`;


const ShopsForm = (props) => {
  return (
    <Wrapper>
      <form>
        <div></div>
        <div className="field">
          <label>Business Name*: </label>
          <input type="text" name="shop_name" placeholder="eg. ABC Market"/>
        </div>
        <div className="field">
          <label>Street Address*: </label>
          <input type="text" name="address_1" placeholder="eg. 123 Greenwich Road" />
        </div>
        <div className="field">
          <label>Unit Address: </label>
          <input type="text" name="address_2" placeholder="eg. Unit 2" />
        </div>
        <div className="field">
          <label>Town: </label>
          <input type="text" name="town" placeholder="eg. Greenwich" />
        </div>
        <div className="field">
          <label>City: </label>
          <input type="text" name="city" placeholder="eg. London" />
        </div>
        <div className="field">
          <label>Post code*: </label>
          <input type="text" name="post_code" placeholder="eg. SE3 6PQ" />
        </div>
        <div className="field">
          <label>Website: </label>
          <input type="text" name="website" placeholder="eg. https://www.google.com" />
        </div>

        <ButtonWrapper>
          <button type="submit">Add Shop</button>
        </ButtonWrapper>
      </form>

    </Wrapper>
  )
}


export default ShopsForm;

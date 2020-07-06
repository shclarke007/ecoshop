import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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

const ProductForm = (props)=> {
  return(
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <div className="field">
          <h2>Add products </h2>
          <p>Add products available at the shop using the form below</p>
          <label>Categories: </label> <br/>
          <i>Hold shift to select multiple categories</i><br />
          <select multiple={true} onChange={props.handleChange}>
            <option onChange={props.handleChange} value="vegetables">Fruits</option>
            <option onChange={props.handleChange} value="vegetables">Vegetables</option>
            <option onChange={props.handleChange} value="dry_goods">Dry Goods</option>
            <option onChange={props.handleChange} value="household_cleaners">Household Cleaners</option>
          </select>
        </div>
        <ButtonWrapper>
         <button type="submit">Add Products</button>
        </ButtonWrapper>
      </form>

    </Wrapper>
  )
};

export default ProductForm;

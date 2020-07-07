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

const UserInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 10px 0;
  display: inline-block;
  border: none;
  background-color: #f1f1f1;
  text-align: center;
  font-size: 0.7em;
`;

const Field = styled.div`
  margin-left: 50px;
  margin-right: 80px;
  &:first-child{
    margin-top: 30px;
  }
`;

const Note = styled.p`
  font-size: 0.7em;
  font-weight: italic;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 20px;
`;
const ShopsForm = (props) => {
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <h3>Fill in details to add a shop</h3>
        <Note>* mandatory fields</Note>
        <Field>
          <Label htmlFor="shop_name">Business Name*: </Label>
          <UserInput onChange={props.handleChange} value={props.shops} type="text" name="shop_name" id="shop_name" placeholder="ABC Market"></UserInput>
        </Field>
        <Field>
          <Label htmlFor="address_1">Street Address*: </Label>
          <UserInput onChange={props.handleChange} value={props.shops} type="text" name="address_1" id="address_1" placeholder="123 Greenwich Road"></UserInput>
        </Field>
        <Field>
          <Label htmlFor="address_2">Unit Address: </Label>
          <UserInput onChange={props.handleChange} value={props.shops} type="text" name="address_2" id="address_2" placeholder="Unit 2"></UserInput>
        </Field>
        <Field>
          <Label htmlFor="town">Town: </Label>
          <UserInput onChange={props.handleChange} value={props.shops} type="text" name="town" id="town" placeholder="Greenwich"></UserInput>
        </Field>
        <Field>
          <Label htmlFor="city">City: </Label>
          <UserInput onChange={props.handleChange} value={props.shops} type="text" name="city" id="city" placeholder="London"></UserInput>
        </Field>
        <Field>
          <Label htmlFor="post_code">Post code*: </Label>
          <UserInput onChange={props.handleChange} value={props.shops} type="text" name="post_code" id="post_code" placeholder="SE3 6PQ"></UserInput>
        </Field>
        <Field>
          <Label htmlFor="website">Website: </Label>
          <UserInput onChange={props.handleChange} value={props.shops} type="text" name="website" id="website" placeholder="https://www.google.com"></UserInput>
        </Field>
        <p>By adding a shop you agree to our <a href="#">terms and privacy</a> </p>
        <ButtonWrapper>
          <button type="submit">Add Shop</button>
        </ButtonWrapper>
      </form>

    </Wrapper>
  )
}


export default ShopsForm;

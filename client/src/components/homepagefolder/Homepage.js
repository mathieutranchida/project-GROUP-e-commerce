import React from "react";
import styled from "styled-components";
//rfce && rxr

import COLORS from '../../constants';

import items from './items.json';

const Homepage = () => {

  const itemsList = items.map((item) =>{
  const quantitiesMessage = item.numInStock === 0 ? 'Unavailable' : `In Stock: ${item.numInStock}`;
  return (
  <Item key={item._id}>   
    <Pic src={item.imageSrc}/>
    <ProductDetailArea>
      <Name>{item.name}</Name>
      <ProductDetail>
        <span>{`Category: ${item.category}`}</span>
        {<Stock qty={item.numInStock}>{quantitiesMessage}</Stock>}
        <span>{`Price: ${item.price}`}</span>
      </ProductDetail>
      <PurchaseBtn>
        Purchase
      </PurchaseBtn>
    </ProductDetailArea>
  </Item>)
});
  return (
    <>
      <Wrapper>
        {itemsList}
      </Wrapper>
    </>
  );
};

const Stock = styled.span`
  color: ${props => {
    if(props.qty === 0){
      return COLORS.red
    } else if(props.qty < 5 && props.qty > 0){
      return COLORS.orange
    } else{
      return COLORS.yellowgreen
    }
    }}
`;

const Pic = styled.img`
  width: 100px;
  height: 100px;

`;

const PurchaseBtn = styled.button`
  background: ${COLORS.yellowgreen};
  border-radius: 10px;
  color: ${COLORS.white};
  padding: 10px;
  border: none;

  :hover{
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  }
`;

const Name = styled.span`
  font-weight: 900;
`;

const ProductDetailArea = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-around;
`;
const ProductDetail = styled.div`
  display:flex;
   flex-direction:column;
    margin-top:10px;
    margin-bottom:10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  
  margin-right: 20px;
`;

const Item = styled.div`
  /* background: ${COLORS.grey}; */
  width: 300px;
  /* height: 100px;  */
  margin: 20px;
  margin-top: 30px;
  display: flex;
  border: 1px none ${COLORS.black};
  border-radius: 10px;
  justify-content: center;
  align-items:center;

  


`;

export default Homepage;

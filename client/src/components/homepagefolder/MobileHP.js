import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import COLORS from "../../constants";

function MobileHP() {
    const itemsData = useSelector(
        (state) => state.items.items && state.items.items.data
      );
    return (
        <Wrapper>
        {itemsData ? (
        itemsData.map(item =>{
            const quantitiesMessage =
            item.numInStock === 0
              ? "Unavailable"
              : `In Stock: ${item.numInStock}`;
           return  (
            <Item key={item._id}>
            <Pic src={item.imageSrc} />
            <ProductDetailArea>
              <Name >
                {item.name}
              </Name>
              <ProductDetail>
               
                {<Stock qty={item.numInStock}>{quantitiesMessage}</Stock>}
                
              </ProductDetail>
              {item.numInStock !== 0 ? (
                <PurchaseBtn>
                  {`Price: ${item.price} Add to cart`}
                </PurchaseBtn>
              ) : (
                <DisabledBtn>Out of stock</DisabledBtn>
              )}
            </ProductDetailArea>
          </Item>
           )
        })
            ) : <p>Loading...</p>
        }
            
        </Wrapper>
    )
}

export default MobileHP

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-right: 20px;
`;
const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PurchaseBtn = styled.button`
  padding: 5px 0px 5px 0px;
  font-family: "Poppins", sans-serif;
  color: ${COLORS.white};
  background-color: ${COLORS.yellowgreen};
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  cursor: pointer;
  size: 30px;
`;

const Stock = styled.span`
  color: ${(props) => {
    if (props.qty === 0) {
      return COLORS.red;
    } else if (props.qty < 5 && props.qty > 0) {
      return COLORS.orange;
    } else {
      return COLORS.yellowgreen;
    }
  }};
`;

const ProductDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-around;
`;

const DisabledBtn = styled.div`
  padding: 10px 0px;
  font-family: "Poppins", sans-serif;
  color: ${COLORS.black};
  background-color: ${COLORS.grey};
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  text-align: center;
`;

const Name = styled.span`
  font-weight: 900;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Item = styled.div`
  /* background: ${COLORS.grey}; */
  width: auto;
  /* height: 100px;  */
  margin: 20px;
  margin-top: 30px;
  display: flex;
  border: 1px none ${COLORS.black};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
 
`;

const Pic = styled.img`
  width: 100px;
  height: 100px;
`;
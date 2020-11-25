import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CartItem = ({ itemObj }) => {
  console.log(itemObj);
  const handleQuantity = (id, quantity) => {
    fetch("/cart", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, quantity: quantity }),
    }).then(() => {
      window.location.reload();
    });
  };
  const handleRemove = (id) => {
    fetch("/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then(() => {
      window.location.reload();
    });
  };
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Image src={itemObj.item.imageSrc} />
          <DetailsWrapper>
            <Name>{itemObj.item.name}</Name>
            <StockWrapper>
              {itemObj.item.numInStock === 0 && <NoStock>Unavailable</NoStock>}
              {itemObj.item.numInStock < 5 && itemObj.item.numInStock > 0 && (
                <LowStock>Low stock</LowStock>
              )}
              {itemObj.item.numInStock >= 5 && <HighStock>In stock</HighStock>}
            </StockWrapper>
            <SoldBy>Sold by: {itemObj.item.companyId}</SoldBy>
            <BottomWrapper>
              <QuantityDiv>
                <Quantity>Quantity:</Quantity>
                <QuantityInput
                  type="number"
                  defaultValue={itemObj.quantity}
                  onChange={(e) =>
                    handleQuantity(itemObj.item._id, e.target.value)
                  }
                />
              </QuantityDiv>
              <Remove onClick={() => handleRemove(itemObj.item._id)}>
                Remove
              </Remove>
            </BottomWrapper>
          </DetailsWrapper>
        </MainWrapper>
        <Price>{itemObj.item.price}</Price>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #eaedec;
`;

const MainWrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 125px;
  width: 125px;
  margin-left: 10px;
`;

const DetailsWrapper = styled.div`
  padding-left: 15px;
`;

const Name = styled.div`
  font-weight: bold;
  padding-bottom: 7px;
`;

const StockWrapper = styled.div`
  font-size: 10pt;
`;

const NoStock = styled.div`
  color: red;
`;

const LowStock = styled.div`
  color: orange;
`;

const HighStock = styled.div`
  color: green;
`;

const SoldBy = styled.div`
  font-size: 11pt;
`;

const BottomWrapper = styled.div`
  display: flex;
  padding-top: 18px;
`;

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Quantity = styled.div`
  padding-right: 10px;
  font-size: 11pt;
`;

const QuantityInput = styled.input`
  width: 35px;
  font-family: "Poppins", sans-serif;
`;

const Remove = styled.button`
  margin-left: 10px;
`;

const Price = styled.div`
  font-weight: bold;
`;

export default CartItem;

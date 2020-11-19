import React from "react";
import styled from "styled-components";

// Add feature to change the header depending if the cart is empty or not.

const CartHeader = () => {
  return (
    <>
      <Wrapper>
        <Title>Your cart</Title>
        {/* {cart.length >= 1 && <Title>Your cart</Title>}
        {cart.length === 0 && <Title>Your cart is empty.</Title>} */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 25pt;
  font-weight: bold;
`;

export default CartHeader;

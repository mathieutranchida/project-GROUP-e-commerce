import React from "react";
import styled from "styled-components";

// Add feature to change the single or plural for items with proper value (Commented out)
// Add feature for total amount $$$

const OrderSummary = () => {
  return (
    <>
      <Wrapper>
        <SubTotalDiv>
          <Sub>Subtotal (1 item):</Sub>
          {/* {cart.length === 1 && <Sub>Subtotal cart.length item:</Sub>}
            {cart.length > 1 && <Sub>Subtotal cart.length items:</Sub>} */}
          <Strong>$10.00</Strong>
        </SubTotalDiv>
        <Button>Proceed to Checkout</Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubTotalDiv = styled.div`
  padding-bottom: 29px;
  display: flex;
  justify-content: space-between;
`;

const Sub = styled.div``;

const Strong = styled.div`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 0px;
  font-family: "Poppins", sans-serif;
  color: white;
  background-color: yellowgreen;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  cursor: pointer;
`;

export default OrderSummary;
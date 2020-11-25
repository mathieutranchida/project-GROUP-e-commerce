import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import COLORS from "../../constants";

const ConfirmedOrder = () => {
  const order = useSelector((state) => state.order);
  return (
    <>
      <MainContainer>
        <MessageConfirmed>Your order has been confirmed!</MessageConfirmed>
        <OrderConfirmed>
          <InfoContainer>
            <Label>Order #: </Label>
            <Info>{order._id}</Info>
          </InfoContainer>
          <InfoContainer>
            <Label>Customer Name: </Label>
            <Info>{order.customer_name}</Info>
          </InfoContainer>
          <InfoContainer>
            <Label>Shipping Address: </Label>
            <Info>{order.shipping_address}</Info>
          </InfoContainer>
          <InfoContainer>
            <Label>Number of Items:</Label>
          </InfoContainer>
          <Line />
          <InfoContainer>
            <Label>Total Price:</Label>
          </InfoContainer>
        </OrderConfirmed>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.grey};
`;

const MessageConfirmed = styled.h2``;

const OrderConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  height: 500px;
  width: 500px;
  border-radius: 7px;
  padding 20px 50px 20px;
  
`;

const InfoContainer = styled.div`
  display: flex;
`;

const Label = styled.h2`
  font-weight: 800;
`;

const Info = styled.h2`
  font-weight: 200;
  color: grey;
`;

const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export default ConfirmedOrder;

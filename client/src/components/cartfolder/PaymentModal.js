import React from "react";
import styled from "styled-components";
import COLORS from "../../constants";

const PaymentModal = ({ cart }) => {
  return (
    <>
      <BackgroundModal>
        <ModalContainer>
          <ContentContainer>
            <Title>Order Checkout</Title>
            <OrderSummaryModal>
              <SmallTitle>Order Summary</SmallTitle>
              {cart.map((item) => {
                return (
                  <>
                    <Item>
                      <ItemPicture src={item.imageSrc} />
                      <ItemName>{item.name}</ItemName>
                      <RightContainer>
                        <Quantity>Quantity: {item.numInStock}</Quantity>
                        <Price>Price: {item.price}</Price>
                      </RightContainer>
                    </Item>
                    <Line />
                  </>
                );
              })}
            </OrderSummaryModal>
            <ContainerInfo>
              <SmallTitle>Customer Information</SmallTitle>
              <LabelInput htmlFor="customer-name">Name</LabelInput>
              <Input id="customer-name" />
              <LabelInput htmlFor="shipping-address">
                Shipping Address
              </LabelInput>
              <Input id="shipping-address" />
            </ContainerInfo>
            <Line />
            <ContainerInfo>
              <SmallTitle>Payment Information</SmallTitle>
              <LabelInput htmlFor="card-name">Name on credit card</LabelInput>
              <Input id="card-name" />
              <LabelInput htmlFor="card-number">Card Number</LabelInput>
              <Input id="card-number" />
              <LabelInput htmlFor="card-expiration-date">
                Expiration Date
              </LabelInput>
              <Input id="card-expiration-date" type="date" />
              <LabelInput htmlFor="billing-address">Billing Address</LabelInput>
              <Input id="billing-address" />
            </ContainerInfo>
            <ProceedPaymentButton>Proceed to Payment</ProceedPaymentButton>
          </ContentContainer>
        </ModalContainer>
      </BackgroundModal>
    </>
  );
};

const BackgroundModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 105vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 500px;
  background-color: white;
  overflow: scroll;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Title = styled.h2`
  color: back;
`;

const OrderSummaryModal = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ItemPicture = styled.img`
  border-radius: 100px;
  height: 80px;
  margin-right: 20px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.h6``;

const Quantity = styled.h5``;

const Price = styled.h5``;

const SmallTitle = styled.h4``;

const Line = styled.hr`
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelInput = styled.label``;

const Input = styled.input`
  border-color: ${COLORS.yellowgreen};
  border-style: solid;
  border-radius: 7px;
  border-width: 1px;
  height: 30px;
  width: 70%;
  margin: 10px;
`;

const ProceedPaymentButton = styled.button`
    margin-top: 50px;
  background-color: ${COLORS.yellowgreen};
  border-style: solid;
  border-color: ${COLORS.yellowgreen};
  border-width: 1px;
  border-radius: 7px;
  height 50px;
  color: white;
  cursor: pointer;
  transiton: 0.2s;
  box-shadow: 0 0 10px;



  &:hover {
    background-color: white;
    color: black;
      box-shadow: none;

  }
`;

export default PaymentModal;

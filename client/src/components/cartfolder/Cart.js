import React, { useEffect } from "react";
import styled from "styled-components";

import CartHeader from "./CartHeader";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import PaymentModal from "./PaymentModal";
import { useSelector } from "react-redux";

const Cart = () => {
  const [modalOpen, setModalOpen] = React.useState();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Div>
        <Wrapper>
          <Main>
            <HeaderWrapper>
              {/* Update CartHeader when BE done */}
              <CartHeader cart={cart} />
              <HeaderSecDiv>
                <Article>Article</Article>
                <Price>Price</Price>
              </HeaderSecDiv>
            </HeaderWrapper>
            <ArticleWrapper>
              {cart.items.map((item) => {
                return <CartItem itemObj={item} key={item.item._id} />;
              })}
              <TotalContainer>
                <Total>Total: ${cart.totalPrice.toFixed(2)}</Total>
              </TotalContainer>
            </ArticleWrapper>
            <PaymentModal
              cart={cart}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </Main>
          <Secondary>
            {/* Update OrderSummary when BE done */}
            <OrderSummary modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </Secondary>
        </Wrapper>
      </Div>
    </>
  );
};

const Div = styled.div`
  background-color: #eaedec;
  min-height: calc(100vh - 75px - 50px);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: #eaedec;
  max-width: 1300px;
  margin: 0px auto;
`;

const Content = styled.div``;

const Main = styled.div`
  width: 100vw;
  background-color: #ffffff;
  padding: 10px 15px;
`;

const Secondary = styled.div`
  width: 400px;
  height: 100px;
  margin-left: 25px;
  background-color: #ffffff;
  padding: 10px 15px;
`;

const HeaderWrapper = styled.div``;

const HeaderSecDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
  color: grey;
  font-size: 10pt;
  padding: 10px 0px 5px 0px;
  border-bottom: 2px solid #eaedec;
`;

const Article = styled.div``;

const Price = styled.div``;

const ArticleWrapper = styled.div``;

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Total = styled.h3`
  font-weight: 800;
`;

export default Cart;

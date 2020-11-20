import React from "react";
import styled from "styled-components";

import CartHeader from "./CartHeader";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

const Cart = () => {
  // Remove when BE done
  const cart = [
    {
      name: "Casio G Shock Watch Solar Atom (gwm500a-1)",
      price: "$67.62",
      body_location: "Wrist",
      category: "Lifestyle",
      _id: 6546,
      imageSrc:
        "data:image/jpeg;base64,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",
      numInStock: 0,
      companyId: 13334,
    },
    {
      name: "Casio WS220 Solar Runner Digital Wrist Watch; Navy Blue",
      price: "$39.99",
      body_location: "Wrist",
      category: "Lifestyle",
      _id: 6547,
      imageSrc:
        "data:image/jpeg;base64,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",
      numInStock: 3,
      companyId: 13334,
    },
    {
      name: "Belkin GS5 Sport Fit Armband, Black F8M918B1C00",
      price: "$24.99",
      body_location: "Arms",
      category: "Fitness",
      _id: 6544,
      imageSrc:
        "data:image/jpeg;base64,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",
      numInStock: 9,
      companyId: 16384,
    },
  ];

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
              {cart.map((article, key) => {
                return <CartItem article={article} key={article._id} />;
              })}
            </ArticleWrapper>
          </Main>
          <Secondary>
            {/* Update OrderSummary when BE done */}
            <OrderSummary />
          </Secondary>
        </Wrapper>
      </Div>
    </>
  );
};

const Div = styled.div`
  background-color: #eaedec;
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

export default Cart;
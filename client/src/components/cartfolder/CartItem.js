import React from "react";
import styled from "styled-components";

const CartItem = (article) => {
  console.log(article);
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Image src={article.article.imageSrc} />
          <DetailsWrapper>
            <Name>{article.article.name}</Name>
            <StockWrapper>
              {article.article.numInStock === 0 && (
                <NoStock>Unavailable</NoStock>
              )}
              {article.article.numInStock < 5 &&
                article.article.numInStock > 0 && (
                  <LowStock>Low stock</LowStock>
                )}
              {article.article.numInStock >= 5 && (
                <HighStock>In stock</HighStock>
              )}
            </StockWrapper>
            <SoldBy>Sold by: {article.article.companyId}</SoldBy>
            <BottomWrapper>
              <QuantityDiv>
                <Quantity>Quantity:</Quantity>
                <QuantityInput type="number" placeholder="1" />
              </QuantityDiv>
              <Remove>Remove</Remove>
            </BottomWrapper>
          </DetailsWrapper>
        </MainWrapper>
        <Price>{article.article.price}</Price>
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

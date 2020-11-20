import React from "react";
import styled from "styled-components";

const ProductPage = () => {
  const product = {
    name: "Casio G Shock Watch Solar Atom (gwm500a-1)",
    price: "$67.62",
    body_location: "Wrist",
    category: "Lifestyle",
    _id: 6546,
    imageSrc:
      "data:image/jpeg;base64,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",
    numInStock: 0,
    companyId: 13334,
  };
  console.log(product);

  return (
    <>
      <Div>
        <Wrapper>
          <Main>
            <ProductImage src={product.imageSrc} />
            <ProductDetailsWrapper>
              <Header>
                <ProductName>{product.name}</ProductName>
                <SoldBy>Sold by: {product.companyId}</SoldBy>
              </Header>
              <PriceWrapper>
                <Price>Price:</Price>
                <Amount>{product.price}</Amount>
              </PriceWrapper>
              <StockWrapper>
                {product.numInStock === 0 && <NoStock>Unavailable</NoStock>}
                {product.numInStock < 5 && product.numInStock > 0 && (
                  <LowStock>Low stock</LowStock>
                )}
                {product.numInStock >= 5 && <HighStock>In stock</HighStock>}
              </StockWrapper>
              <DetailedInfoWrapper>
                <LeftDetailedInfoWrapper>
                  <CategoryName>Body location:</CategoryName>
                  <CategoryName>Category:</CategoryName>
                  <CategoryName>Product ID:</CategoryName>
                </LeftDetailedInfoWrapper>
                <RightDetailedInfoWrapper>
                  <AttributeName>{product.body_location}</AttributeName>
                  <AttributeName>{product.category}</AttributeName>
                  <AttributeName>{product._id}</AttributeName>
                </RightDetailedInfoWrapper>
              </DetailedInfoWrapper>
            </ProductDetailsWrapper>
          </Main>
          <AddToCart>Add to cart</AddToCart>
        </Wrapper>
      </Div>
    </>
  );
};

const Div = styled.div`
  background-color: #eaedec;
  padding: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  max-width: 1150px;
  padding: 25px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductImage = styled.img`
  height: 300px;
  width: 300px;
`;

const ProductDetailsWrapper = styled.div``;

const Header = styled.div`
  border-bottom: 2px solid #eaedec;
`;

const ProductName = styled.div`
  font-size: 25pt;
  font-weight: bold;
`;

const SoldBy = styled.div`
  font-size: 10pt;
  color: grey;
`;

const PriceWrapper = styled.div`
  display: flex;
  font-size: 16pt;
  margin-top: 25px;
`;

const Price = styled.div`
  margin-right: 10px;
`;

const Amount = styled.div`
  font-weight: bold;
`;

const StockWrapper = styled.div`
  display: flex;
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

const DetailedInfoWrapper = styled.div`
  display: flex;
  font-size: 11pt;
  margin-top: 25px;
`;

const LeftDetailedInfoWrapper = styled.div`
  margin-right: 25px;
`;

const RightDetailedInfoWrapper = styled.div`
  font-weight: bold;
`;

const CategoryName = styled.div``;

const AttributeName = styled.div``;

const AddToCart = styled.button`
  padding: 10px 0px;
  font-family: "Poppins", sans-serif;
  color: white;
  background-color: yellowgreen;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  cursor: pointer;
  width: 250px;
  text-align: center;
  margin-top: 25px;
`;

export default ProductPage;

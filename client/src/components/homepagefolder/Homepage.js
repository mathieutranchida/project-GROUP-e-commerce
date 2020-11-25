import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//rfce && rxr

import { addToCart } from "../../redux/actions";

import history from "../../history";
import COLORS from "../../constants";
import Loading from "../../Loading";

import Pagination from "./Pagination";
import ModalAddedToCart from "../productpagefolder/ModalAddedToCart";

const Homepage = () => {
  const itemsData = useSelector(
    (state) => state.items.items && state.items.items.data
  );


  const dispatch = useDispatch();

  const itemsPerPage = Math.ceil(
    itemsData === null ? 20 : itemsData.length / 10
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const items = itemsData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(items);

  const handleAddItemToServer = (item) => {
    fetch("/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => dispatch(addToCart(item)));
  };
  const [barPosition, setBarPosition] = useState(0)
  return (
    <>
      <MainWrapper>
      <Pagination
             paginate={paginate} 
             currentPage={currentPage} 
             barBottom={true}
              barPosition={barPosition} 
              setBarPosition={setBarPosition}/>
        {items ? (
          <Wrapper>
            {items.map((item) => {
              const quantitiesMessage =
                item.numInStock === 0
                  ? "Unavailable"
                  : `In Stock: ${item.numInStock}`;
              return (
                <Item key={item._id}>
                  <Pic src={item.imageSrc} />
                  <ProductDetailArea>
                    <Name
                      onClick={() => {
                        history.push(`/product/${item._id}`);
                        document.location.reload();
                      }}
                      tabIndex="0"
                      aria-label="view detailed product page"
                      onKeyDown={(ev) => {
                        if (ev.key === "Enter") {
                          history.push(`/product/${item._id}`);
                          document.location.reload();
                        }
                      }}
                    >
                      {item.name}
                    </Name>
                    <ProductDetail>
                      <span>{`Category: ${item.category}`}</span>
                      {<Stock qty={item.numInStock}>{quantitiesMessage}</Stock>}
                      <span>{`Price: ${item.price}`}</span>
                    </ProductDetail>
                    {item.numInStock !== 0 ? (
                      <PurchaseBtn
                        onClick={() => {
                          handleAddItemToServer(item);
                          setShowModal(true);
                        }}
                      >
                        Add to cart
                      </PurchaseBtn>
                    ) : (
                      <DisabledBtn>Out of stock</DisabledBtn>
                    )}
                  </ProductDetailArea>
                </Item>
              );
            })}
            
            <ModalAddedToCart
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </Wrapper>
        ) : (
          <Loading />
        )}
        <Pagination
             paginate={paginate} 
             currentPage={currentPage} 
             barBottom={false}
              barPosition={barPosition} 
              setBarPosition={setBarPosition}/>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  min-height: calc(100vh - 75px - 50px);
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

const Pic = styled.img`
  width: 100px;
  height: 100px;
`;

const PurchaseBtn = styled.button`
  padding: 10px 0px;
  font-family: "Poppins", sans-serif;
  color: ${COLORS.white};
  background-color: ${COLORS.yellowgreen};
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  cursor: pointer;
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

const ProductDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-around;
`;
const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  margin-right: 20px;
`;

const Item = styled.div`
  /* background: ${COLORS.grey}; */
  width: 300px;
  /* height: 100px;  */
  margin: 20px;
  margin-top: 30px;
  display: flex;
  border: 1px none ${COLORS.black};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export default Homepage;

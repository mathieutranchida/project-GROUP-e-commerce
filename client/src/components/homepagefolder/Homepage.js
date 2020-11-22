import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//rfce && rxr

import history from "../../history";
import COLORS from "../../constants";
import {
  requestAllItems,
  receiveAllItems,
  receiveAllItemsError,
} from "../../redux/actions";

const Homepage = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllItems());
    fetch("/items", {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(receiveAllItems(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveAllItemsError());
      });
  }, []);

  const items = useSelector(
    (state) => state.items.items && state.items.items.data
  );
  console.log(items);

  return (
    <>
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
                    onClick={(ev) => {
                      ev.stopPropagation();
                      history.push(`/product/${item._id}`);
                    }}
                    tabIndex="0"
                    aria-label="view detailed product page"
                    onKeyDown={(ev) => {
                      if (ev.key === "Enter") {
                        ev.stopPropagation();
                        history.push(`/product/${item._id}`);
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
                  <PurchaseBtn>Purchase</PurchaseBtn>
                </ProductDetailArea>
              </Item>
            );
          })}
        </Wrapper>
      ) : undefined}
    </>
  );
};

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

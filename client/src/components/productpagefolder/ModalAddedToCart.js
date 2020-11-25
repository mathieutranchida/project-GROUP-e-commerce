import React from "react";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import COLORS from "../../constants";

const ModalAddedToCart = ({ showModal, setShowModal }) => {
  const FlexWrapper = styled.div`
    display: flex
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const ModalContainer = styled.div`
    background-color: white;
    position: fixed;
    width: 450px;
    height: 100px;
    bottom: 0;
    right: 0;
    display: ${showModal ? "flex" : "none"};
    align-items: center;
    justify-content: space-around;
    margin: 30px;
    box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  `;

  const Title = styled.h3`
    margin-left: 20px;
  `;

  const GoToCart = styled(Link)`
    text-decoration: none;
    background-color: ${COLORS.yellowgreen};
    color: white;
    border-radius: 7px;
    box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
    text-align: center;
    margin-right: 10px;
    height: 50%;
    display: flex;
    align-items: center;
  `;

  const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-start;
  `;

  const CloseButton = styled.button`
    border-style: none;
    background: transparent;
    border-radius: 50px;
    cursor: pointer;
    height: 50px;
    width: 50px;
  `;
  return (
    <>
      <ModalContainer>
        <FlexWrapper>
          <CloseContainer>
            <CloseButton
              onClick={() => {
                setShowModal(false);
              }}
            >
              <IoMdCloseCircleOutline />
            </CloseButton>
          </CloseContainer>
        </FlexWrapper>
        <Title>This item was added to your cart!</Title>
        <GoToCart
          to="/cart"
          onClick={() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }}
        >
          Go to Cart
        </GoToCart>
      </ModalContainer>
    </>
  );
};

export default ModalAddedToCart;

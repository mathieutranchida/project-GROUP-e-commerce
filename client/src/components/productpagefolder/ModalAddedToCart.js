import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import COLORS from "../../constants";

const ModalAddedToCart = ({ showModal, setShowModal }) => {
  const ModalBackground = styled.div`
    position: absolute;
    width: 100vw;
    height: 110vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${showModal ? "flex" : "none"};
    justify-content: center;
    align-items: center;
  `;

  const ModalContainer = styled.div`
    background-color: white;
    height: auto;
    width: 400px;
    display: ${showModal ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
  `;

  const Title = styled.h3`
    margin-bottom: 20px;
  `;

  const ConfirmedIcon = styled(AiFillCheckCircle)`
    width: 60px;
    height: 60px;
    fill: ${COLORS.darkBlue};
    margin-bottom: 20px;
  `;

  const GoToCart = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    background-color: ${COLORS.yellowgreen};
    color: white;
    border-radius: 7px;
    padding: 20px;
    box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  `;

  const CloseContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `;

  const CloseButton = styled.button`
    border-style: none;
    background: transparent;
    border-radius: 50px;
    cursor: pointer;
  `;
  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <CloseContainer>
            <CloseButton
              onClick={() => {
                setShowModal(false);
              }}
            >
              <IoMdCloseCircleOutline />
            </CloseButton>
          </CloseContainer>
          <Title>This item was added to your cart!</Title>
          <ConfirmedIcon />
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
      </ModalBackground>
    </>
  );
};

export default ModalAddedToCart;

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Content>© Wearable.ca - 2020</Content>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  color: white;
  background-color: #1b1f26;
`;

const Content = styled.div``;

export default Footer;

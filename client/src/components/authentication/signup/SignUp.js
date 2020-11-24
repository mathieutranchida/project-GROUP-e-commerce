import React from "react";
import styled from "styled-components";

import COLORS from "../../../constants";

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <LoginWrapper>
          <Title>Sign up</Title>
          <InputDiv>
            <Type>Name *</Type>
            <Input type="text" required />
          </InputDiv>
          <InputDiv>
            <Type>Email *</Type>
            <Input type="email" required />
          </InputDiv>
          <InputDiv>
            <Type>Password *</Type>
            <Input type="password" required />
          </InputDiv>
          <InputDiv>
            <Type>Confirm password *</Type>
            <Input type="password" required />
          </InputDiv>
          <InputDiv>
            <Type>Address *</Type>
            <Input type="address" required />
          </InputDiv>
          <ButtonWrapper>
            <Button>Sign up</Button>
          </ButtonWrapper>
        </LoginWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 75px - 50px);
  background-color: ${COLORS.grey};
`;

const LoginWrapper = styled.div`
  background-color: ${COLORS.white};
  width: 350px;
  position: absolute;
  top: 45vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 15px 25px;
  box-shadow: 0px 0px 10px 0px ${COLORS.grey};
  border-radius: 15px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 25pt;
  margin-bottom: 15px;
`;

const InputDiv = styled.div`
  margin-bottom: 10px;
`;

const Type = styled.div``;

const Input = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 11pt;
  width: 350px;
`;

const Button = styled.button`
  padding: 10px 50px;
  font-family: "Poppins", sans-serif;
  color: white;
  background-color: yellowgreen;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  cursor: pointer;
  margin: 25px auto 0px auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

export default SignUp;

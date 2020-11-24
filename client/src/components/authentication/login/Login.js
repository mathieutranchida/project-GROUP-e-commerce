import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import COLORS from "../../../constants";

const Login = () => {
  return (
    <>
      <Wrapper>
        <LoginWrapper>
          <Title>Login</Title>
          <InputDiv>
            <Type>Email *</Type>
            <Input type="email" required />
          </InputDiv>
          <InputDiv>
            <Type>Password *</Type>
            <Input type="password" required />
          </InputDiv>
          <SignUp to="/sign-up">Create an account</SignUp>
          <ButtonWrapper>
            <Button>Login</Button>
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
  margin-bottom: 15px;
`;

const Type = styled.div``;

const Input = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 11pt;
  width: 350px;
`;

const SignUp = styled(NavLink)`
  display: block;
  text-align: right;
  font-size: 10pt;
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
  margin: 20px auto 0px auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

export default Login;

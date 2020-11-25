import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Redirect } from "react-router-dom";

import COLORS from "../../../constants";
import { useDispatch } from "react-redux";
import history from "../../../history";

import {
  requestSingleAccount,
  receiveSingleAccount,
  receiveaSingleAccountError,
} from "../../../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(requestSingleAccount());
    fetch(`/account/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          console.log(data);
          dispatch(receiveSingleAccount(data.data));
          localStorage.setItem("isLoggedIn", true);
          // return <Redirect to="/my-profile" />;
          // history.push("/my-profile");
        } else {
          dispatch(receiveaSingleAccountError());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveaSingleAccountError());
      });
  };

  return (
    <>
      <Wrapper>
        <LoginWrapper>
          <Title>Login</Title>
          <InputDiv>
            <Type>Email *</Type>
            <Input
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <Type>Password *</Type>
            <Input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputDiv>
          <SignUp to="/sign-up">Create an account</SignUp>
          <ButtonWrapper>
            <Button onClick={handleLogin}>Login</Button>
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

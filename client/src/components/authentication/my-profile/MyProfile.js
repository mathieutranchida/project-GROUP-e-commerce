import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { logoutFromAccount } from "../../../redux/actions";

import COLORS from "../../../constants";
import history from "../../../history";
import Loading from "../../../Loading";

const MyProfile = () => {
  const profileInfo = useSelector(
    (state) => state.currentUser.account && state.currentUser.account
  );

  const dispatch = useDispatch();

  return (
    <>
      {profileInfo ? (
        <Wrapper>
          <LoginWrapper>
            <Title>My profile</Title>
            <DetailsWrapper>
              <LeftColumn>
                <Attribute>Username:</Attribute>
                <Attribute>Email:</Attribute>
                <Attribute>Password:</Attribute>
                <Attribute>Address:</Attribute>
              </LeftColumn>
              <RightColumn>
                <Attribute>{profileInfo.name}</Attribute>
                <Attribute>{profileInfo.email}</Attribute>
                <Attribute>{profileInfo.password}</Attribute>
                <Address>
                  <Attribute2>{profileInfo.address_line_1}</Attribute2>
                  <Attribute2>{profileInfo.address_line_2}</Attribute2>
                </Address>
              </RightColumn>
            </DetailsWrapper>
            <ButtonWrapper>
              <Button
                onClick={() => {
                  history.push("/");
                  document.location.reload();
                  localStorage.removeItem("isLoggedIn");
                  localStorage.removeItem("email");
                  dispatch(logoutFromAccount());
                }}
              >
                Logout
              </Button>
            </ButtonWrapper>
          </LoginWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <Loading />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 75px - 50px);
  background-color: ${COLORS.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  background-color: ${COLORS.white};
  padding: 15px 25px;
  box-shadow: 0px 0px 10px 0px ${COLORS.grey};
  border-radius: 15px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 25pt;
`;

const DetailsWrapper = styled.div`
  display: flex;
  margin: 20px 0px 25px 0px;
`;

const LeftColumn = styled.div`
  font-weight: bold;
  margin: 0px 40px 0px 0px;
`;

const RightColumn = styled.div``;

const Attribute = styled.div`
  padding: 5px 0px;
`;

const Address = styled.div`
  padding: 5px 0px;
`;

const Attribute2 = styled.div`
  padding: 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 50px;
  font-family: "Poppins", sans-serif;
  color: white;
  background-color: red;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 10px rgba(161, 161, 161, 0.3);
  cursor: pointer;
`;

export default MyProfile;

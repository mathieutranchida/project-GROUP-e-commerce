import React from "react";
import styled from "styled-components";

import COLORS from "../../../constants";

const MyProfile = () => {
  return (
    <>
      <Wrapper>
        <LoginWrapper>
          <Title>My orders</Title>
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
`;

export default MyProfile;

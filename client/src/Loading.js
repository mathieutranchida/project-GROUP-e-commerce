import React from "react";
import styled from "styled-components";

import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <Wrapper>
      <StyledSpinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSpinner = styled(ImSpinner2)`
  height: 50px;
  width: 50px;
  animation-duration: 1500ms;
  animation-name: spin;
  animation-iteration-count: infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;

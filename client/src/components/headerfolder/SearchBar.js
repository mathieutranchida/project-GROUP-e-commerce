import React from "react";
import styled from "styled-components";

const SearchBarComponent = () => {
  return (
    <>
      <Wrapper>
        <SearchBar placeholder="Search an item..." />
        <SearchButton>Search</SearchButton>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border: 3px yellowgreen solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  height: 33px;
  width: 50vw;
  max-width: 700px;
  border: none;
  padding: 1px 5px 0px 10px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

const SearchButton = styled.button`
  height: 34px;
  border: none;
  background-color: yellowgreen;
  color: white;
  cursor: pointer;
  padding: 0px 15px;
  font-family: "Poppins", sans-serif;
`;

export default SearchBarComponent;

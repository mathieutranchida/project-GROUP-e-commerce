import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import history from "../../history";

const SearchBarComponent = () => {
  const [value, setValue] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  const items = useSelector(
    (state) => state.items.items && state.items.items.data
  );

  if (items) {
    const suggestions = items.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) &&
        value.length >= 3 &&
        item.name.toLowerCase() !== value.toLowerCase()
    );

    return (
      <>
        <Wrapper>
          <WrapperInput>
            <SearchBar
              type="text"
              value={value}
              placeholder="Search an item..."
              onChange={(keyDown) => setValue(keyDown.target.value)}
              onKeyDown={(ev) => {
                switch (ev.key) {
                  //   case "Enter": {
                  //     history.push(`/product/${item._id}`);
                  //     return;
                  //   }
                  case "ArrowUp": {
                    if (selectedSuggestionIndex > 0) {
                      ev.preventDefault();
                      setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                    }
                    return;
                  }
                  case "ArrowDown": {
                    if (selectedSuggestionIndex < suggestions.length - 1) {
                      ev.preventDefault();
                      setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                    }
                    return;
                  }
                }
              }}
            />
            <SearchButton>Search</SearchButton>
          </WrapperInput>
          <WrapperSuggestions>
            {suggestions.length > 0 && (
              <HiddenWrapperSuggestions>
                {suggestions.map((item, index) => {
                  const suggestionStart = item.name
                    .toLowerCase()
                    .indexOf(value.toLowerCase());
                  const suggestionEnd = suggestionStart + value.length;

                  const firstHalf = item.name.slice(0, suggestionEnd);
                  const secondHalf = item.name.slice(suggestionEnd);

                  return (
                    <SuggestionsList
                      key={item._id}
                      onClick={() => {
                        history.push(`/product/${item._id}`);
                        document.location.reload();
                      }}
                      onKeyDown={(ev) => {
                        console.log(ev.key);
                        if (ev.key === "Enter") {
                          history.push(`/product/${item._id}`);
                          document.location.reload();
                        }
                      }}
                      onMouseOver={() => setSelectedSuggestionIndex(index)}
                      style={{
                        background:
                          selectedSuggestionIndex === index
                            ? "yellowgreen"
                            : "transparent",
                        // color:
                        //   selectedSuggestionIndex === index ? "white" : "black",
                      }}
                    >
                      <span>
                        {firstHalf}
                        <Prediction>{secondHalf}</Prediction>
                      </span>
                    </SuggestionsList>
                  );
                })}
              </HiddenWrapperSuggestions>
            )}
          </WrapperSuggestions>
        </Wrapper>
      </>
    );
  } else {
    return (
      <>
        <Loading>Loading</Loading>
      </>
    );
  }
};
const Wrapper = styled.div``;

const WrapperInput = styled.div`
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

const WrapperSuggestions = styled.div``;

const HiddenWrapperSuggestions = styled.div`
  position: absolute;
  width: 50vw;
  background-color: white;
  color: black;
  padding: 5px;
  box-shadow: 0px 0px 5px 1px grey;
`;

const SuggestionsList = styled.li`
  padding: 7px 10px;
  list-style-type: none;
  cursor: pointer;
`;

const Prediction = styled.strong``;

const Loading = styled.div``;

export default SearchBarComponent;

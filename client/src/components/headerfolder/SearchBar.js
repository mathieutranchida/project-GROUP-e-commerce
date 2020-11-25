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
                  case "Enter": {
                    if (suggestions[selectedSuggestionIndex]) {
                      history.push(
                        `/product/${suggestions[selectedSuggestionIndex]._id}`
                      );
                      document.location.reload();
                    }
                    return;
                  }
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
                  case "Escape": {
                    setValue("");
                  }
                }
              }}
            />
            <SearchButton onClick={() => setValue("")}>Clear</SearchButton>
          </WrapperInput>
          <WrapperSuggestions>
            {suggestions.length > 0 && (
              <HiddenSuggestionList>
                {suggestions.map((item, index) => {
                  const suggestionStart = item.name
                    .toLowerCase()
                    .indexOf(value.toLowerCase());
                  const suggestionEnd = suggestionStart + value.length;

                  const firstHalf = item.name.slice(0, suggestionEnd);
                  const secondHalf = item.name.slice(suggestionEnd);

                  return (
                    <SuggestionItem
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
                    </SuggestionItem>
                  );
                })}
              </HiddenSuggestionList>
            )}
          </WrapperSuggestions>
        </Wrapper>
      </>
    );
  } else {
    return (
      <>
        <Wrapper>
          <WrapperInput>
            <SearchBar
              type="text"
              value={value}
              placeholder="Search an item..."
              onChange={(keyDown) => setValue(keyDown.target.value)}
            />
            <SearchButton onClick={() => setValue("")}>Clear</SearchButton>
          </WrapperInput>
        </Wrapper>
      </>
    );
  }
};
const Wrapper = styled.div`
  border: 3px yellowgreen solid;
  border-radius: 10px;
  z-index: 2000;
`;

const WrapperInput = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  height: 33px;
  width: 50vw;
  max-width: 700px;
  border: none;
  padding: 1px 5px 0px 5px;
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

const HiddenSuggestionList = styled.div`
  top: 45px;
  position: absolute;
  width: 50vw;
  background-color: white;
  color: black;
  padding: 5px;
  max-width: 700px;
  font-size: 11pt;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px grey;
`;

const SuggestionItem = styled.div`
  padding: 7px 10px;
  cursor: pointer;
  border-radius: 10px;
`;

const Prediction = styled.strong``;

export default SearchBarComponent;

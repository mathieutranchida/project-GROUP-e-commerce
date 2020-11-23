import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

import useFetchAllItems from "../useFetchAllItems";
import Cart from "./cartfolder/Cart";
import Footer from "./Footer";
import Header from "./headerfolder/Header";
import Homepage from "./homepagefolder/Homepage";
import ProductPage from "./productpagefolder/ProductPage";

function App() {
  useFetchAllItems();
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div``;

export default App;

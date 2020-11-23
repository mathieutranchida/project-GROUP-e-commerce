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
import useFetchCart from "../custom-hooks/fetchCart";

function App() {
  //Retrieve cart each time app re-renders. This way we keep cart at each rtefresh everywhere in the app
  useFetchCart();
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

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

import Cart from "./cartfolder/Cart";
import Footer from "./Footer";
import Header from "./headerfolder/Header";
import Homepage from "./homepagefolder/Homepage";
import ProductPage from "./productpagefolder/ProductPage";
import Login from "./authentication/login/Login";
import SignUp from "./authentication/signup/SignUp";
import MyProfile from "./authentication/my-profile/MyProfile";
import useFetchCart from "../custom-hooks/fetchCart";
import useFetchAllItems from "../custom-hooks/useFetchAllItems";
import useFetchUser from "../custom-hooks/useFetchUser";
import ConfirmedOrder from "./cartfolder/ConfirmedOrder";

import MobileHp from './homepagefolder/MobileHP'

import useWindowsWidth from '../custom-hooks/useWindowWidth-hook';

function App() {
  //Retrieve cart each time app re-renders. This way we keep cart at each rtefresh everywhere in the app
  useFetchCart();
  useFetchAllItems();
  useFetchUser();

  const isMobile = useWindowsWidth();
  
  
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          {!isMobile && <Header /> }
          <Switch>
            <Route exact path="/">
              {/* <Homepage /> */}
             
              {isMobile ? <MobileHp/> : <Homepage/>}
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/my-profile">
              <MyProfile />
            </Route>
            <Route path="/confirmed-order">
              <ConfirmedOrder />
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

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import Sidebar from "./Sidebar";
import SearchBarComponent from "./SearchBar";
import { useSelector } from "react-redux";

// Update items in cart when DB is done
// Implement Search as a stretch

const Header = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Wrapper>
        <Main>
          <div style={{ color: "white" }}>
            {/* <Icon icon={androidMenu} size={40} /> */}
            <Sidebar />
          </div>
          <Logo>
            <Link exact to="/">
              Wearable.ca
            </Link>
          </Logo>
          <SearchBarComponent />
        </Main>
        <Nav>
          <Link exact to="/">
            Homepage
          </Link>
          <Link to="/cart">
            <CartWrapper
              onClick={() =>
                setTimeout(() => {
                  window.location.reload();
                }, 500)
              }
            >
              <ItemsInCart>{cart.numberOfItems}</ItemsInCart>
              <div>Cart</div>
            </CartWrapper>
          </Link>
          {isLoggedIn ? (
            <Link to="/my-profile">My profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #1b1f26;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const Logo = styled.div`
  margin: 0px 25px 0px 15px;
`;

const CartWrapper = styled.div`
  margin: 0px 25px 0px 25px;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ItemsInCart = styled.div`
  margin-right: 8px;
  padding: 0px 8px;
  background-color: yellowgreen;
  border-radius: 30px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export default Header;

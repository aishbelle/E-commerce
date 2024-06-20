import React, { useState } from "react";

import Container from '@mui/material/Container';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
// import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
  import { useCartContext } from "../context/CartContext";
const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(true);
const {total_item}=useCartContext();
  return (
    <NavB>
    
      <Container maxWidth="xl">
      <div className= "navbar">
        <ul className="navbar-lists">
        <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
         
        </ul>

       
      </div>
      </Container>
    
    </NavB>
  );
};
const NavB = styled.nav`
.navbar-lists {
  display: flex;
  gap: 4.8rem;
  align-items: center;

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: bold;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
}
.cart-trolley--link {
  position: relative;

  .cart-trolley {
    position: relative;
    font-size: 3.2rem;
  }

  .cart-total--item {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    background-color: #000;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    top: -20%;
    left: 70%;
    background-color: ${({ theme }) => theme.colors.helper};
  }
}
`;
export default Nav;

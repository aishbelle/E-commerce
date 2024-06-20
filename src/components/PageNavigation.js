import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/home">Home</NavLink>/{title}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  padding-top: 9rem;
  min-width:500 rem;
  margin-top:50;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  font-weight: bold;
  padding-left: 1rem;
  a {
    font-size: 3.2rem;
  }
`;
export default PageNavigation;

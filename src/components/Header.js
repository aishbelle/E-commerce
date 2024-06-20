import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box } from "@mui/material";
import styled from "styled-components";
import Nav from "./Nav";
const Header = () => {
  return (
    <AppBar position="fixed">
      <Box
        sx={{
          bgcolor: "#651FFF",
          boxShadow: 1,
          borderRadius: 1,
          p: 0.5,
          minWidth: 300,
          height: 70,
        }}
      >
        <MainHeader>
          <span className="logos">
          <NavLink to="/">
            <img src="./images/brand.gif" alt=" my logo img" />
          </NavLink>
          </span>
          <Nav />
        </MainHeader>
      </Box>
    </AppBar>
  );
};

const MainHeader = styled.header`
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logos {
    position:relative;
    padding: .5px;
    width: 10px;
  }
`;

export default Header;

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  border-bottom: 1px solid #eee;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  height: 60px;
  margin: 0 auto;
  padding: 1rem;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;

  img {
    height: 100%;
  }
`;

const Header = () => (
  <StyledHeader>
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logo} alt="Logotype" />
      </LogoContainer>
      <Navigation />
    </HeaderContainer>
  </StyledHeader>
);

export default Header;

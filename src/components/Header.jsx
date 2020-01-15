import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import Navigation from './Navigation';
import { variables } from '../abstracts';

const StyledHeader = styled.header`
  border-bottom: 1px solid #eee;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: ${variables.pageWidth};
  min-height: 60px;
  margin: 0 auto;
  padding: 1rem;

  @media ${variables.desktopBreakpoint} {
    flex-direction: row;
  }
`;

const LogoContainer = styled(Link)`
  height: 60px;
  width: auto;
  margin-bottom: 1rem;

  text-decoration: none;
  border: none;
  box-shadow: none;

  img {
    height: 100%;
  }
  
  @media ${variables.desktopBreakpoint} {
    margin-bottom: 0;
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

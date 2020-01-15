import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors, variables } from '../abstracts';

const StyledNavigation = styled.nav`
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border-bottom: none;
  box-shadow: none;
  color: inherit;
  margin: 0 1rem;

  &:hover {
    text-decoration: none;
    color: ${colors.blue};
  }

  @media ${variables.desktopBreakpoint} {
    margin: 0;

    &:not(:first-child) {
      margin: 0 0 0 1rem;
    }
  }
`;

const navItems = [
  { name: 'Hem', link: '/' },
  { name: 'Tjänster', link: '/tjanster' },
  { name: 'Om mig', link: '/om-mig' },
  { name: 'Frågor och svar', link: '/fragor-och-svar' },
  { name: 'Kontakt', link: '/kontakt' },
];

const Navigation = () => (
  <StyledNavigation>
    {navItems.map(item => (
      <StyledLink to={item.link} key={item.link}>{item.name}</StyledLink>
    ))}
  </StyledNavigation>
);

export default Navigation;

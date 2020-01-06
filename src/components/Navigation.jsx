import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavigation = styled.nav``;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const navItems = [
  { name: 'Hem', link: '/' },
  { name: 'Tjänster', link: '/tjanster' },
  { name: 'Om mig', link: '/om-mig' },
  { name: 'Frågor & svar', link: '/fragor-och-svar' },
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

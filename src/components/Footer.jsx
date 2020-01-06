import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #999;
  color: #fff;
`;

const FooterContainer = styled.footer`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>hej</FooterContainer>
  </StyledFooter>
);

export default Footer;

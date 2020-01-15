import React from 'react';
import styled from 'styled-components';
import { colors, variables } from '../abstracts';

const StyledFooter = styled.footer`
  border-top: solid 1px ${colors.gray[800]};
`;

const FooterContainer = styled.footer`
  max-width: ${variables.pageWidth};
  margin: 0 auto;
  padding: 4rem 1rem;
  font-size: 1rem;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>Svanbergs Tekniktjänst</FooterContainer>
  </StyledFooter>
);

export default Footer;

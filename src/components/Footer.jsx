import React from 'react';
import styled from 'styled-components';
import { colors, variables } from '../abstracts';

const StyledFooter = styled.footer`
  border-top: solid 1px ${colors.gray[800]};
`;

const FooterContainer = styled.footer`
  max-width: ${variables.pageWidth};
  margin: 0 auto;
  padding: 2rem 1rem;
  font-size: 1rem;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      Svanbergs Tekniktjänst
      <br />
      <br />
      <a href="mailto:teknik@svanbergstjanst.se">teknik@svanbergstjanst.se</a> - <a href="tel://0707737567">0707 737 567</a>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;

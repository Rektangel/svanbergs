import { createGlobalStyle } from 'styled-components';
import { colors, variables } from './abstracts';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    background-color: ${colors.white};
    color: ${colors.gray[200]};
    font-size: 1em;
    line-height: 1.5;
    
    @media ${variables.desktopBreakpoint} {
      font-size: 1.2em;
    }
  }
  
  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    border-bottom: 1px solid ${colors.blue};
    box-shadow: inset 0 -2px 0 ${colors.blue};
    color: inherit;
    
    transition: all 0.2s;
    
    &:hover {
      text-decoration: none;
      color: ${colors.blue};
    }
  }
`;

export default GlobalStyle;

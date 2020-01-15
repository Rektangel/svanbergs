import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { colors, variables } from '../abstracts';
import ContactDetails from '../components/ContactDetails';

const StyledQuote = styled.blockquote`
  margin: 2rem 0;
  padding: 1rem 1rem 1rem 2rem;
  background-color: ${colors.gray[900]};
  border-left: 5px solid ${colors.green};

  p {
    font-style: italic;
  }

  span {
    margin-top: 2rem;
    font-weight: bold;
  }

  @media ${variables.desktopBreakpoint} {
    margin-left: 2rem;
  }
`;

const ContactPage = () => (
  <Layout pageTitle="Kontakt">
    <h1>Kontakt</h1>

    <ContactDetails />

    <h2>Några kommentarer från kunder</h2>

    <StyledQuote>
      <p>
        Tack för ditt fina bemötande och att du fick igång viaplay, nu kan jag
        kolla fotboll igen! 5 av 5 i betyg :D
      </p>

      <span>Ulf Melin</span>
    </StyledQuote>

    <StyledQuote>
      <p>
        Använde mig av Svanbergs tekniktjänst för att se vad som va fel med mitt
        internet. Han kom snabbt fram till att det var fel på internetkabeln
        samt löste problemet till mig och kopplade om allt som behövdes.
        Underbart trevlig kille som snabbt och enkelt löste mitt problem. Mycket
        tacksam!
      </p>

      <span>Oliver Lindström</span>
    </StyledQuote>

    <StyledQuote>
      <p>
        Stort tack till Svanbergs tekniktjänst för att ni hjälpte mig att komma
        igång med mitt smarta hem. Inte nog att jag fick mina behov mötta, Oscar
        gav mig tips och råd till för att göra mitt hem smartare än vad jag
        någonsin trodde det kunde vara. Otrolig service!
      </p>

      <span>Fredrik Andreasson</span>
    </StyledQuote>
  </Layout>
);

export default ContactPage;

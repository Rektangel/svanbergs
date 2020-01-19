import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { variables } from '../abstracts';

const Question = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Answer = styled.p`
  @media ${variables.desktopBreakpoint} {
    margin-left: 2rem;
  }
`;

const FAQPage = () => (
  <Layout pageTitle="Frågor och svar">
    <h1>Frågor och svar</h1>

    <div>
      <Question>
        Hur är det med garantin på produkterna du installerar?
      </Question>
      <Answer>
        Svar: Efter en installation får du som kund kvitto på produkterna jag
        installerat och det är till återförsäljaren garantin gäller. Produkterna
        jag eller kunden köper in har alltid 3 års reklamationsrätt och olika
        garantitider. Om olyckan skulle vara framme och något går i sönder så är
        det direkt till återförsäljaren man tar det. Dock hjälper jag gärna till
        att installera den nya men då blir det en ny debitering.
      </Answer>
    </div>

    <div>
      <Question>I vilka områden jobbar du?</Question>
      <Answer>
        Svar: Jag jobbar främst i Lunds tätort, men tveka inte att höra av er om
        ni bor utanför Lund. Finns tid så kommer jag gärna ut.
      </Answer>
    </div>

    <div>
      <Question>Vad kostar ett besök?</Question>
      <Answer>
        Svar: För privatpersoner så kostar ett besök 395 kr i timmen efter
        rutavdrag, annars 790 kr timmen. För företag är priset 695 kr exkl.
        moms.
      </Answer>
    </div>

    <div>
      <Question>Hur lång tid tar ett besök?</Question>
      <Answer>
        Svar: Oftast under en timme. Du får en tidsuppskattning innan vi
        träffas.
      </Answer>
    </div>
  </Layout>
);

export default FAQPage;

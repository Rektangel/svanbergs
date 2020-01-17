import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ContactDetails from '../components/ContactDetails';

const StyledList = styled.ul`
  margin: 2rem 0;

  li {
    margin: 1rem 0;
  }
`;

const ServicesPage = () => (
  <Layout pageTitle="Tjänster">
    <h1>Tjänster</h1>
    <StyledList>
      <li>
        Ger både köpråd och köper in ev produkter som behövs för installationen.
      </li>
      <li>Installerar, och går igenom om något behövs förklaras.</li>
      <li>Jag jobbar främst i Lunds tätort.</li>
    </StyledList>

    <p>
      Om det är ett litet jobb eller ett stort, tveka inte att höra av dig! Jag
      kan hjälpa dig med allt från att komma igång med en ny telefon till att
      installera större nätverk, övervakning, smarta hem etc.
    </p>
    <p>
      Maila mig och förklara ärendet kortfattat, så hör jag av mig inom kort. Om
      du ringer så tala gärna in ett meddelande, så återkommer jag.
    </p>

    <ContactDetails />

    <h2>Kostnad</h2>

    <h3>Privat</h3>
    <p>
      <b>395* kr timmen</b>
      <br />
      <br />
      *Pris efter 50 % RUT-avdrag
      <br />
      Minimidebitering är 1 timme. Debitering påbörjas vid ankomst, resan dit tillkommer inte.
    </p>

    <h3>Företag</h3>
    <p>
      <b>695* kr timmen</b>
      <br />
      <br />
      *ex moms
      <br />
      Minimidebitering är 1 timme. Debitering påbörjas vid ankomst, resan dit tillkommer inte.
    </p>
  </Layout>
);

export default ServicesPage;

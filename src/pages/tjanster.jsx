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
    <p>
      Om det är ett litet jobb eller ett stort, tveka inte att höra av dig!{' '}
    </p>

    <p>
      Jag kan hjälpa dig med allt från att komma igång med en ny telefon till
      att installera större nätverk, övervakning, smarta hem mm.
    </p>

    <p>
      Jag kan också ge köpråd och vid behov köpa in de produkter som behövs.
      Naturligtvis får du även en genomgång av hur man använder produkterna. Jag
      jobbar främst i Lunds tätort.
    </p>

    <p>
      Maila mig och förklara ärendet kortfattat. Om du ringer så tala gärna in
      ett meddelande, alternativt SMS:a så återkommer jag inom kort.
    </p>

    <ContactDetails />

    <h2>Kostnad</h2>

    <p>Godkänd för F-skatt </p>

    <h3>Privat</h3>

    <p>
      <b>395* kr timmen</b>
    </p>

    <p>*Pris efter 50 % RUT-avdrag</p>

    <p>För längre uppdrag är timkostnaden enligt överenskommelse.</p>

    <p>
      Minimidebitering är 1 timme. Debitering påbörjas vid ankomst, resan dit
      tillkommer inte.
    </p>

    <h3>Företag</h3>

    <p>
      <b>695* kr timmen</b>
    </p>

    <p>*ex moms</p>

    <p>För längre uppdrag är timkostnaden enligt överenskommelse.</p>

    <p>
      Minimidebitering är 1 timme. Debitering påbörjas vid ankomst, resan dit
      tillkommer inte.
    </p>
  </Layout>
);

export default ServicesPage;

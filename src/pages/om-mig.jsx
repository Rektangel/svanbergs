import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AboutPicture from '../images/profile_about.jpg';
import { variables } from '../abstracts';

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 80%;
    margin: 0 10%;
  }

  @media ${variables.desktopBreakpoint} {
    flex-direction: row;

    div {
      width: 48%;

      p:first-child {
        margin-top: 0;
      }
    }

    img {
      width: 100%;
      margin: 0;
    }
  }
`;

const AboutPage = () => (
  <Layout pageTitle="Om mig">
    <h1>Om mig</h1>

    <AboutContainer>
      <div>
        <img src={AboutPicture} alt="Oscar ready for work" />
      </div>

      <div>
        <p>
          Hej, mitt namn är Oscar Svanberg och jag har alltid haft ett stort
          intresse för teknik. Speciellt hur teknik kan göra ens vardag lättare.
          Här kan ni läsa om min resa.
        </p>

        <p>
          Mitt mål är att alla ska kunna få assistans med att installera en produkt.
          Då jag jobbat inom handeln och hjälpt till med att hitta rätt
          teknikprodukt för kunders ändamål i snart 7 år, har jag insett att det
          fattas något. Jag fick ofta frågan om inte jag kunde hjälpa. Ibland gick
          det bra att lösa på plats men de flesta gångerna hade ett hembesök varit
          guld värt. Det var då efter ett tag jag insåg behovet. Att få hjälp med
          att installera en produkt och ha en genomgång om hur man använder den var
          svårhittad. Det var då jag fick idéen om att starta Svanbergs
          Tekniktjänst.
        </p>
      </div>
    </AboutContainer>
  </Layout>
);

export default AboutPage;

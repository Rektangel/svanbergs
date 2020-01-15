import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout pageTitle="Kontakt">
    <h1>Kontakt</h1>

    <p>Mail: teknik@svanbergstjanst.se</p>

    <p>Telefon: XXXX XXX XXX (kommer senare)</p>

    <h2>Några kommentarer från kunder</h2>

    <blockquote>
      <p>
        Tack för ditt fina bemötande och att du fick igång viaplay, nu kan jag
        kolla fotboll igen! 5 av 5 i betyg :D
      </p>

      <b>Ulf Melin</b>
    </blockquote>

    <blockquote>
      <p>
        Använde mig av Svanbergs tekniktjänst för att se vad som va fel med mitt
        internet. Han kom snabbt fram till att det var fel på internet kabeln
        samt löste problemet till mig och kopplade om allt som behövdes.
        Underbart trevlig kille som snabbt och enkelt löste mitt problem. Mycket
        tacksam!
      </p>

      <b>Oliver Lindström</b>
    </blockquote>

    <blockquote>
      <p>
        Stort tack till Svanbergs tekniktjänst för att ni hjälpte mig att komma
        igång med mitt smarta hem. Inte nog att jag fick mina behov mötta, Oscar
        gav mig tips och råd till för att göra mitt hem smartare än vad jag
        någonsin trodde det kunde vara. Otrolig service!
      </p>

      <b>Fredrik Andreasson</b>
    </blockquote>
  </Layout>
);

export default ContactPage;

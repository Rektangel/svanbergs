import React from 'react';
import Layout from '../components/Layout';

const FAQPage = () => (
  <Layout pageTitle="Frågor och svar">
    <h1>Frågor och svar</h1>

    <div>
      <p>Hur är det med garantin på produkterna du installerar?</p>
      <p>
        Efter en installation får kunden kvittona på produkterna vi installerat
        och det är till återförsäljaren garantin gäller. Produkterna jag eller
        kunden köper in har alltid 3 års reklamationsrätt och diverse garanti
        tider. Om olyckan skulle vara framme och något går i sönder så är det
        direkt till återförsäljaren man tar det. Dock hjälper jag gärna till att
        installera den nya men då blir det en ny debitering.
      </p>
    </div>

    <div>
      <p>I vilka områden jobbar du?</p>
      <p>
        Jag jobbar främst i Lunds tätort, men tveka in att höra av er om ni bor
        utanför Lund. Finns tid så kommer jag gärna ut.
      </p>
    </div>

    <div>
      <p>Vad kostar ett besök?</p>
      <p>För privatpersoner så kostar ett besök 395kr i timmen med rut. Vill du inte använda dig av rut ligger ett besök just nu på 780 kr timmen. För företag ligger priset på 695 kr ex moms.</p>
    </div>

    <div>
      <p>Hur lång tid tar ett besök?</p>
      <p>Oftast tar arbetet under en timme. Innan jag kommer ut så pratar vi av och bestämmer tid. Då kommer jag ge ett hum på hur lång tid ett liknade ärende brukar ta.</p>
    </div>

    <div>
      <p>Vad händer om ni inte kan lösa problemet?</p>
      <p>Vi presenterar alltid en lösning på problemet. Det kan handla om att något litet behöver köpas till eller att datorn helt enkelt är för gammal etc. Om vi inte lyckas lösa problemet du upplever på plats ser vi alltid till att du ska veta hur du ska ta dig vidare! Vilket vi även gärna hjälper till med.</p>
    </div>
  </Layout>
);

export default FAQPage;

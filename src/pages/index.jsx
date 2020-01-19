import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { variables } from '../abstracts';
import ProfilePicture from '../images/profile_start.jpg';

const H2 = styled.h2`
  text-align: center;
`;

const ProfileImageContainer = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 80%;
  border-radius: 50%;

  @media ${variables.desktopBreakpoint} {
    width: 60%;
  }
`;

const IndexPage = () => (
  <Layout>
    <h1>Teknik ska bara fungera</h1>
    <ProfileImageContainer>
      <ProfileImage src={ProfilePicture} alt="Oscar Svanberg" />
    </ProfileImageContainer>
    <H2>Behöver du hjälp med att få något installerat?</H2>
    <H2>Har du kanske ett behov men vet ej hur du ska lösa det?</H2>
    <H2>Då har du kommit rätt!</H2>
    <H2>
      Svanbergs tekniktjänst jobbar just nu med att få Lund fritt från
      teknikstrul!
    </H2>
  </Layout>
);

export default IndexPage;

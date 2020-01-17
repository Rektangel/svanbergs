import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { variables } from '../abstracts';
import ProfilePicture from '../images/profile_start.jpg';

const InfoContainer = styled.div`
  @media ${variables.desktopBreakpoint} {
    display: flex;
    justify-content: space-around;
    justify-content: space-around;
  }
`;

const InfoItem = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;

  @media ${variables.desktopBreakpoint} {
    width: 40%;
    width: 40%;
    font-size: 1.6rem;
  }
`;

const H2 = styled.h2`
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin-top: 2rem;
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
    <InfoContainer>
      <InfoItem>Behöver du hjälp med att få något installerat?</InfoItem>
      <InfoItem>
        Har du kanske ett behov men vet ej hur du ska lösa det?
      </InfoItem>
    </InfoContainer>
    <H2>Då har du kommit rätt!</H2>
    <StyledParagraph>
      Svanbergs tekniktjänst jobbar just nu med att få Lund fritt från
      teknikstrul!
    </StyledParagraph>
  </Layout>
);

export default IndexPage;

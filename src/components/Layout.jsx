import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import SiteMetadata from './SiteMetadata';
import Header from './Header';
import Footer from './Footer';

const LayoutPropTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Layout = ({ children, pageTitle }) => (
  <>
    <SiteMetadata pageTitle={pageTitle} />
    <Header />
    <Main role="main">{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = LayoutPropTypes;
Layout.defaultProps = {
  pageTitle: '',
};

export default Layout;

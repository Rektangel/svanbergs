import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import * as PropTypes from 'prop-types';

export const SiteMetadataPropTypes = {
  pageTitle: PropTypes.string,
};

const SiteMetadata = ({ pageTitle }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <title>{pageTitle}</title>
      <html lang="sv" />
    </Helmet>
  );
};

SiteMetadata.propTypes = SiteMetadataPropTypes;
SiteMetadata.defaultProps = {
  pageTitle: '',
};

export default SiteMetadata;

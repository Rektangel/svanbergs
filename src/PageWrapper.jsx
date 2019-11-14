import React from 'react';
import * as PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './GlobalStyles';

const PageWrapper = ({ element }) => (
  <>
    <Normalize />
    <GlobalStyles />
    {element}
  </>
);

PageWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PageWrapper;

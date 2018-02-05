import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Footer } = Layout;

const footer = ({ children, className }) => (
  <Footer className={className}>
    {children}
  </Footer>
);

footer.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(footer)`
  background: #000;
  color: #fff;
  text-align: center;
`;

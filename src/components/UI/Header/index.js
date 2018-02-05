import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Header } = Layout;

const header = ({ children, className }) => (
  <Header className={className}>
    {children}
  </Header>
);

header.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(header)`  
  color: #fff;
`;

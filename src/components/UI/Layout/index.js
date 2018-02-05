import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'antd';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const layout = ({ children, className }) => (
  <Layout className={className}>
    <Header>
      Header
    </Header>
    <Content>
      {children}
    </Content>
    <Footer>
      Footer
    </Footer>
  </Layout>
);

layout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(layout)`  
  height: 100vh;
`;


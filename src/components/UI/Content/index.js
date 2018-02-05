import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Content: ContentComponent } = Layout;

const ContentWrapper = ({ children, className }) => (
  <Layout className={className}>
    {children}
  </Layout>
);

const Content = ({ children, className }) => (
  <ContentComponent className={className}>
    {children}
  </ContentComponent>
);

const StyledContent = styled(Content)`
  background: #fff;
  padding: 24px; 
  margin: 0;
`;

const StyledWrapper = styled(ContentWrapper)`
  padding: 24px;
  overflow-y: auto;
`;

const AppContent = ({ children }) => (
  <StyledWrapper>
    <StyledContent>
      {children}
    </StyledContent>
  </StyledWrapper>
);

ContentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

AppContent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppContent;

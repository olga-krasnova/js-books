import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1240px;

  @media (max-width: 1280px) {
    max-width: 980px;
  }

  @media (max-width: 1024px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default MainTemplate;

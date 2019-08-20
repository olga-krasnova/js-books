import React from 'react';
import Header from '../../organisms/Header';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainTemplate;

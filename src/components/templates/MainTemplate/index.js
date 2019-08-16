import React, { Fragment } from 'react';
import Header from '../../organisms/Header';

const MainTemplate = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
};

export default MainTemplate;

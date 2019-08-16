import React, { Fragment } from 'react';
import MainTemplate from '../../templates/MainTemplate';
import BookList from '../../organisms/BookList';

const HomePage = () => {
  return (
    <Fragment>
      <MainTemplate>
        <BookList />
      </MainTemplate>
    </Fragment>
  )
};

export default HomePage;

import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import BookList from '../../organisms/BookList';

const HomePage = () => {
  return (
    <>
      <MainTemplate>
        <BookList />
      </MainTemplate>
    </>
  )
};

export default HomePage;

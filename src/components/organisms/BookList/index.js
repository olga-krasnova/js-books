import React from 'react';
import styled from 'styled-components';
import BookItem from '../../molecules/BookItem';

const List = styled.ul`
  list-style: none;
`;

const BookList = () => {
  return (
    <List>
      <BookItem />
    </List>
  )
};

export default BookList;

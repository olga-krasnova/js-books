import React from 'react';
import BookstoreServiceContext from '../contexts/BookstoreServiceContext';

const WithBookstoreService = () => Wrapped => {
  return props => {
    return (
      <BookstoreServiceContext.Consumer>
        {bookstoreService => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceContext.Consumer>
    );
  };
};

export default WithBookstoreService;

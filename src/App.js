import React from 'react';
import ApiService from './services/ApiService';
import BookStoreService from './services/BookstoreService';

const apiService = new ApiService();

const getBooks = async () => {
  const bookStoreService = new BookStoreService(apiService);
  return await bookStoreService.fetchBooks().then(res => res);
};

const App = () => {
  console.log(getBooks());
  return <div className="App">Hello</div>;
};

export default App;

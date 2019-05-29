import React from 'react';

import './css/App.css';
import NewBookForm from './NewBookForm';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
    <h1> Welcome to Book Tracker</h1>
    <h3> You've read ... books</h3>
      <div className="book-container">
        <NewBookForm />
        <BookList />
        </div>
    </div>
  );
}

export default App;

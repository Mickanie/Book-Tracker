import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/BookList.css";
import BookInfo from "./BookInfo";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentWillMount() {}

  componentDidMount() {
    fetch("http://localhost:3001/booklist")
      .then(response => response.json())
      .then(data => this.setState({ books: data }));
  }

/*   componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {} */

  render() {
    return (
      <div className="book-list-container">
        <h3>Books you've read:</h3>
        <div>
          {this.state.books.map((book, i) => (
            <BookInfo key={i} book={book} />
          ))}
        </div>
      </div>
    );
  }
}

BookList.propTypes = {};

export default BookList;

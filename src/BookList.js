import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/BookList.css";

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="book-list-container">
        <h3>Books you've read:</h3>
      </div>
    );
  }
}

BookList.propTypes = {};

export default BookList;

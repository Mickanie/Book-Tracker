import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/BookInfo.css";

class BookInfo extends Component {
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
    const book = this.props.book;
    return (
      <div className="book-card">
        <table>
          <tbody>
            <tr>
              <td className="left-column">Title:</td>
              <td className="right-column">{book.title}</td>
            </tr>
            <tr>
              <td className="left-column">Author:</td>
              <td className="right-column">{book.author}</td>
            </tr>
            <tr>
              <td className="left-column">ISBN:</td>
              <td className="right-column">{book.ISBN}</td>
            </tr>
            <tr>
              <td className="left-column">No of pages:</td>
              <td className="right-column">{book.pages}</td>
            </tr>
            <tr>
              <td className="left-column"> Your rating:</td>
              <td className="right-column">
                {"★ ".repeat(parseInt(book.rating))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

BookInfo.propTypes = {};

export default BookInfo;

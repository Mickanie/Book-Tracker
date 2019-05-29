import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/BookInfo.css";

class BookInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    };
  }

  /*   componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {} */

  switchEditMode = () => {
    if (this.state.editMode) {
      const ratingArea = document.querySelector(".rating-edition");
      const title = document.querySelector("#title");
      const author = document.querySelector("#author");
      const ISBN = document.querySelector("#ISBN");
      const pages = document.querySelector("#pages");

      if (
        title.value &&
        title.checkValidity() &&
        author.value &&
        author.checkValidity() &&
        ISBN.value &&
        ISBN.checkValidity() &&
        pages.checkValidity()
      ) {
        this.setState({ editMode: false });
        this.props.editBook(this.props.book.ISBN);
      }
    } else {
      this.setState({ editMode: true });
    }
  };

  render() {
    const book = this.props.book;
    return (
      <div className="book-card">
        <button
          className="edit"
          data-isbn={book.ISBN}
          onClick={this.switchEditMode}
        />
        <button
          className="delete"
          data-isbn={book.ISBN}
          onClick={this.props.deleteBook}
        >
          ✖
        </button>
        <table>
          <tbody>
            <tr>
              <td className="left-column">Title:</td>
              <td className="right-column">
                {this.state.editMode ? (
                  <input
                    type="text"
                    name="title"
                    id="title"
                    pattern="^[A-Z]{1}[A-Za-z\s0-9]{2,45}"
                    rewuired
                    defaultValue={book.title}
                  />
                ) : (
                  book.title
                )}
              </td>
            </tr>
            <tr>
              <td className="left-column">Author:</td>
              <td className="right-column">
                {" "}
                {this.state.editMode ? (
                  <input
                    type="text"
                    name="author"
                    id="author"
                    pattern="[A-Z]{1}[a-z.]{1,15}\s{1}[A-Z]{1}[a-z]{2,20}"
                    required
                    defaultValue={book.author}
                  />
                ) : (
                  book.author
                )}
              </td>
            </tr>
            <tr>
              <td className="left-column">ISBN:</td>
              <td className="right-column">
                {" "}
                {this.state.editMode ? (
                  <input
                    type="text"
                    name="ISBN"
                    id="ISBN"
                    pattern="[0-9]{13}"
                    required
                    defaultValue={book.ISBN}
                  />
                ) : (
                  book.ISBN
                )}
              </td>
            </tr>
            <tr>
              <td className="left-column">No of pages:</td>
              <td className="right-column">
                {" "}
                {this.state.editMode ? (
                  <input
                    type="text"
                    name="pages"
                    id="pages"
                    pattern="[0-9]{2,4}"
                    required
                    defaultValue={book.pages}
                  />
                ) : (
                  book.pages
                )}
              </td>
            </tr>
            <tr>
              <td className="left-column"> Your rating:</td>
              <td className="right-column">
                {" "}
                {this.state.editMode ? (
                  <div className="rating-edition">
                    <input type="radio" name="rating" value="1" id="rated-1" />
                    <label htmlFor="rated-1">★</label>
                    <input type="radio" name="rating" value="2" id="rated-2" />
                    <label htmlFor="rated-2">★</label>
                    <input type="radio" name="rating" value="3" id="rated-3" />
                    <label htmlFor="rated-3">★</label>
                    <input type="radio" name="rating" value="4" id="rated-4" />
                    <label htmlFor="rated-4">★</label>
                    <input
                      type="radio"
                      name="rating"
                      value="5"
                      id="rated-5"
                      defaultChecked
                    />
                    <label htmlFor="rated-5">★</label>
                  </div>
                ) : (
                  "★ ".repeat(parseInt(book.rating))
                )}
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

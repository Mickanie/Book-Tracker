import React, { Component } from "react";
import "../css/BookInfo.css";

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.author = React.createRef();
    this.ISBN = React.createRef();
    this.pages = React.createRef();
    this.rating = React.createRef();

    this.state = {
      editMode: false,
      ISBN: this.props.book.ISBN
    };
  }

  validateISBN = ISBN => {
    if (ISBN.length === 13) {
      const array = ISBN.split("");
      let sum = 0;
      for (let i = 1; i <= array.length; i++) {
        if (i % 2 === 1) {
          sum += parseInt(array[i - 1]);
        } else {
          sum += 3 * parseInt(array[i - 1]);
        }
      }
      return sum % 10 === 0 ? true : false;
    } else {
      return false;
    }
  };

  switchEditMode = e => {
    if (this.state.editMode) {
      const title = this.title.current;
      const author = this.author.current;
      const ISBN = this.ISBN.current;
      const pages = this.pages.current;
      const rating = this.rating.current;
      console.log(rating);

      if (
        title.checkValidity() &&
        author.checkValidity() &&
        this.validateISBN(this.state.ISBN) &&
        pages.checkValidity()
      ) {
        this.setState({ editMode: false });
        this.props.editBook(
          e,
          title,
          author,
          ISBN,
          pages,
          rating
        );
      }
    } else {
      this.setState({ editMode: true });
    }
  };

  render() {
    const book = this.props.book;
   /* let background = this.validateISBN(this.props.book.ISBN)
      ? "transparent"
      : "rgba(255, 0, 0, 0.143)";*/
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
                    required
                    ref={this.title}
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
                    ref={this.author}
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
                    //style={{ background }}
                    ref={this.ISBN}
                    onChange={e => this.setState({ ISBN: e.target.value })}
                    defaultValue={book.ISBN}
                  />
                ) : (
                  book.ISBN
                )}
              </td>
            </tr>
            <tr>
              <td className="left-column">No. of pages:</td>
              <td className="right-column">
                {" "}
                {this.state.editMode ? (
                  <input
                    type="text"
                    name="pages"
                    id="pages"
                    pattern="[0-9]{2,4}"
                    required
                    ref={this.pages}
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
                  <div className="rating-edition" ref={this.rating}>
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

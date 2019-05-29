import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/NewBookForm.css";

class NewBookForm extends Component {
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
      <div className="new-book-container">
        <h3>Add a new book</h3>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" pattern="[A-Za-z\s0-9]{3,45}" />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            pattern="[A-Za-z]{3,15}\s{1}[A-Za-z]{3,20}"
          />
          <label htmlFor="ISBN">ISBN</label>
          <input type="text" name="ISBN" pattern="[0-9]{13}" />
          <label htmlFor="pages">No of pages</label>
          <input type="text" name="pages" pattern="[0-9]{2,4}" />
          <label htmlFor="rating">Your rating</label>
          <div className="rating-stars">
            <input type="radio" name="rating" value="1" id="rate-1" />
            <label htmlFor="rate-1">★</label>
            <input type="radio" name="rating" value="2" id="rate-2" />
            <label htmlFor="rate-2">★</label>
            <input type="radio" name="rating" value="3" id="rate-3" />
            <label htmlFor="rate-3">★</label>
            <input type="radio" name="rating" value="4" id="rate-4" />
            <label htmlFor="rate-4">★</label>
            <input type="radio" name="rating" value="5" id="rate-5" />
            <label htmlFor="rate-5">★</label>
          </div>

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

NewBookForm.propTypes = {};

export default NewBookForm;

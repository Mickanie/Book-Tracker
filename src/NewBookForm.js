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
      </div>
    );
  }
}

NewBookForm.propTypes = {};

export default NewBookForm;

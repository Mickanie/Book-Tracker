import {
  REQUEST_BOOKLIST,
  REQUEST_BOOKLIST_SUCCESS,
  REQUEST_BOOKLIST_FAIL,
  ADD_BOOK,
  EDIT_BOOK,
  DELETE_BOOK
} from "./types";

export const getBooklist = () => dispatch => {
  dispatch({ type: REQUEST_BOOKLIST });
  fetch("https://book-tracker-server.herokuapp.com/booklist")
    .then(response => response.json())
    .then(books =>
      dispatch({
        type: REQUEST_BOOKLIST_SUCCESS,
        payload: books
      })
    )
    .catch(error => dispatch({ type: REQUEST_BOOKLIST_FAIL, payload: error }));
};

export const addNewBook = newBook => dispatch => {
  console.log(newBook);
  fetch("https://book-tracker-server.herokuapp.com/add-book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook)
  }).then(response =>
    response.json().then(books =>
      dispatch({
        type: ADD_BOOK,
        payload: books
      })
    )
  );
};


export const deleteBook = ISBN => dispatch => {
    fetch("https://book-tracker-server.herokuapp.com/delete-book", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ISBN
      })
    }).then(response =>
      response.json().then(books => dispatch({
          type: DELETE_BOOK,
          payload: books
      }))
    );
  };
//9783161484100
//9780306406157
  export const editBook = editedBook => dispatch => {
      console.log(editedBook);
    fetch("https://book-tracker-server.herokuapp.com/edit-book", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            editedBook
        )
      }).then(response =>
        response.json().then(books => dispatch({
            type: EDIT_BOOK,
            payload: books
        }))
      );
  };
const initialState = {
  books: [], 

};

export const booksReducer = (state = initialState, action = {}) => {
  return { ...state, books: action.payload };
  
};

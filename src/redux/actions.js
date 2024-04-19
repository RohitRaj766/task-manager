export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO'; // New action type for updating a todo
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const addTodo = (id, text, date, status) => ({
  type: ADD_TODO,
  payload: { id, text, date, status },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

// Action creator for updating a todo
export const updateTodo = (id, text, date, status) => ({
  type: UPDATE_TODO,
  payload: { id, text, date, status },
});


export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
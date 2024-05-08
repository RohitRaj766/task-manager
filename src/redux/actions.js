export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const IN_PROGRESS = "IN_PROGRESS";
export const COMPLETED  = "COMPLETED";
export const REMOVE_TASKS = "REMOVE_TASKS"

export const addTodo = (id, text, date, status) => ({
  type: ADD_TODO,
  payload: { id, text, date, status },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (id, text, date, status) => ({
  type: UPDATE_TODO,
  payload: { id, text, date, status },
});

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const inProgress = (task) => ({
  type: IN_PROGRESS,
  payload: task
});

export const completed = (task) => ({
  type: COMPLETED,
  payload: task
});

export const removeTasks = (id) => ({
  type: REMOVE_TASKS,
  payload: id,
})

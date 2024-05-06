import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_SEARCH_QUERY,
  IN_PROGRESS,
  COMPLETED,
  REMOVE_TASKS,
} from "./actions";

const initialState = {
  tasks: [],
  searchQuery: "",
  inProgress: [],
  completedStore: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text,
                date: action.payload.date,
                status: action.payload.status,
              }
            : todo
        ),
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case REMOVE_TASKS:
      return {
        ...state,
        inProgress: state.inProgress.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    case IN_PROGRESS:
      return {
        ...state,
        inProgress: [...state.inProgress, ...action.payload],
      };
    case COMPLETED:
      return {
        ...state,
        completedStore: [...state.completedStore, ...action.payload],
      };
    default:
      return state;
  }
};

export default todosReducer;

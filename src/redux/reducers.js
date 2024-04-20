import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_SEARCH_QUERY, IN_PROGRESS, COMPLETED } from './actions';

const initialState = {
    tasks: [],
    searchQuery: '',
    inProgress:[],
    completed:[]
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter(todo => todo.id !== action.payload)
            };
        case UPDATE_TODO:
            return {
                ...state,
                tasks: state.tasks.map(todo =>
                    todo.id === action.payload.id ?
                        { ...todo, text: action.payload.text, date: action.payload.date, status: action.payload.status } :
                        todo
                )
            };
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
            case IN_PROGRESS:
                console.log("IN_PROGRESS action payload:", action.payload);
                return {
                    ...state,
                    inProgress: action.payload,
                    tasks: state.tasks.map(task => 
                        action.payload.includes(task.id) ? { ...task, status: 'IN_PROGRESS' } : task
                    )
                };
            
        default:
            return state;
    }
};

export default todosReducer;

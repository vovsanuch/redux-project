import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './todos-const'

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    title: action.title,
                    id: Date.now(),
                    completed: false
                }]
        }
        case REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.id)
        }
        case TOGGLE_TODO: {
            return state.map(todo => (
                todo.id === action.todoId
                    ? {
                        ...todo,
                        completed: !todo.completed
                    } : todo
            ))
        }
        default: {
            return state
        }
    }
}
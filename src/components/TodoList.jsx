import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import {removeTodo, toggleTodo} from '../store/todos/todos-actions'
import {selectVisibleTodos} from '../store/todos/todos-selectors'
// import {selectActiveFilter} from "../store/filters/filters-selectors";

const TodoList = () => {
    const dispatch = useDispatch()
    const {filter} = useParams()
    const todos = useSelector(state => selectVisibleTodos(state, filter))

    console.log(todos)

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />{" "}
                    {todo.title}{" "}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                </li>
            ))}
        </ul>

    );
};

export default TodoList;
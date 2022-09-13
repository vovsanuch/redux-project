import React from 'react';
import NewTodo from "./components/NewTodo";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className="App">
            <h1>Learn Redux</h1>
            <NewTodo />
            <Filters />
            <TodoList />
        </div>
    );
};

export default App;
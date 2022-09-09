import React from "react";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";


const App = () =>{

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 'DK' },
        { label: 'Drink Milk', important: true, id: 'DM' },
        { label: 'Drink Beer', important: false, id: 'DB' }
    ]

    return (
        <div>
            <Header />
            <SearchPanel />
            <TodoList todos = {todoData}/>
        </div>
    );
}

export default App
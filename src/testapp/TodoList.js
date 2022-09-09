import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ( {todos} ) =>{

    const elem = todos.map( item =>{
        const {id} = item
        const {label} = item
        const {important} = item
    return (
        <li key = {id}>
            <TodoListItem
            label={label}
            important={important}/>
        </li>
    )
    })

    return(
        <ul>
            { elem }
        </ul>
    );
};

export default TodoList
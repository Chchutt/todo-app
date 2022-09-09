import React from 'react'
import NewTaskForm from "../new-task-form/new-task-form";
import './app-header.css'

export default class AppHeader extends React.Component{

    render(){
    return (
        <header className="header__container">
            <h1 className='header__text'>TODOS</h1>
            <NewTaskForm
                addItem={this.props.addItem}
            />
        </header>
        )
    }
}

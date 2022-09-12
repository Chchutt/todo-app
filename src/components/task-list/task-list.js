import React from "react";
import './task-list.css'
import Task from "../task/task";



export default class TaskList extends React.Component {



    render() {

        const { onToggleActive, onToggleLeft, visibleItems, onToggleEdit } = this.props
        const element = visibleItems.map(item => {
            const {currentDate} = item
            const {description} = item
            const {id} = item
            const {active} = item
            const {status} = item

            return (
                <Task
                    description={description}
                    currentDate={currentDate}
                    id={id}
                    active={active}
                    status={status}
                    onToggleEdit={() => onToggleEdit(id)}
                    onToggleActive={() => onToggleActive(id)}
                    onToggleLeft={() => onToggleLeft(id)}
                />
            )
        })
        return (
            <ul className='todo-list'>
                {element}
            </ul>
        )
    }
}






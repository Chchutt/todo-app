import React from "react";
import './task-list.css'
import Task from "../task/task";



export default class TaskList extends React.Component {

    render() {

        const { onToggleActive, onToggleLeft, visibleItems } = this.props
        const element = visibleItems.map(item => {
            const {createdTime} = item
            const {description} = item
            const {id} = item
            const {active} = item
            const {status} = item
            return (

                <Task
                    description={description}
                    created={createdTime}
                    id={id}
                    active={active}
                    status={status}
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






import React from "react";
import './task.css'
import CreactingTimeForTask from '../creating-time-for-task/creacting-time-for-task'

export default class Task extends React.Component{

    render(){

        const { description, currentDate, id,
               onToggleActive, onToggleLeft, status, active, onToggleEdit} = this.props
        let check = true

        let dis = {display: 'none'}

        if(!active){
            check = false
        }
        return (
            <li className={status} id={id}>

                <div className='view'>
                    <input className="toggle" type="checkbox" checked={check} onClick={onToggleActive}/>
                    <label>
                        <span className='description'>{description}</span>
                        <CreactingTimeForTask currentDate={currentDate}/>
                    </label>
                    <button className="icon icon-edit" onClick={onToggleEdit}/>
                    <button className="icon icon-destroy" onClick={onToggleLeft}  />
                </div>
                <input type="text"
                       className="edit"
                       style={dis}
                       value="Editing task"
                       placeholder='What needs to be done?'
                />
            </li>
        )
    }
}



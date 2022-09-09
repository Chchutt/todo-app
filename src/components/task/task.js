import React from "react";

export default class Task extends React.Component{

    render(){
        const { description, createdTime, id,
               onToggleActive, onToggleLeft, status, active} = this.props
        let check = true
        if(!active){
            check = false
        }
        return (
            <li className={status} id={id}>
                <div className='view'>
                    <input className="toggle" type="checkbox" checked={check} onClick={onToggleActive}/>
                    <label>
                        <span className='description'>{description}</span>
                        <span className="created">{createdTime}</span>
                    </label>
                    <button className="icon icon-edit"/>
                    <button className="icon icon-destroy" onClick={onToggleLeft}  />
                </div>
            </li>
        )
    }
}



import './creating-time-for-task.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import React from "react";


export default class CreatingTimeForTask extends React.Component{

    state = {
        time: "",
    }

    createdTime = setInterval( () =>{
        this.setState(({ time }) => {
            let newTime = formatDistanceToNowStrict(this.props.currentDate)
            return{
                time: newTime
            }
        })
        },1000)


    render() {

        return(
        <span className="created">{`created ${this.state.time} ago`}</span>
        )
    }
}
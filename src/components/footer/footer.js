import React from "react";
import TasksFilter from "../tasks-filter/tasks-filter";
import './footer.css'

export default class Footer extends React.Component{


    render(){

            return(
                <footer className="footer">
                    <span className="todo-count">{`${this.props.left} items left, ${this.props.active} items active`}</span>
                    <TasksFilter filterChange={() => this.props.filterChange}/>
                    <button className="clear-completed" onClick={this.props.clearFilter}>Clear completed</button>
                </footer>
            )
        }
    }

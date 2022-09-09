import React from "react";
import AppHeader from "../app-header/app-header";
import Footer from "../footer/footer";
import TaskList from "../task-list/task-list";

export default class TodoApp extends React.Component{

    maxId = 100;

    state = {
        tasksData: [
            this.createTodoItem('Completed task'),
            this.createTodoItem('Editing task'),
            this.createTodoItem('Active task'),
        ],
        filter: 'all'
    };

    createTodoItem(text) {
        return {
            id: this.maxId++,
            description: text,
            createdTime: text,
            active: false,
            status: 'active'
        }
    }


    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({ tasksData }) => {
            const newArray = [...tasksData, newItem];
            return{
                tasksData: newArray
            }
        })
    }

    onToggleActive = (id) =>{
        this.setState(({ tasksData }) => {
            const idx = tasksData.findIndex((el) => el.id === id);
            const oldItem = tasksData[idx];

            let newItem = {...oldItem,
                active: !oldItem.active
            }

            if(newItem.active) {
                newItem = {...newItem,
                status: "completed"}
            }

            if(!newItem.active) {
                newItem = {...newItem,
                    status: "active"}
            }

            const newArray = [...tasksData.slice(0, idx), newItem, ...tasksData.slice(idx +1)];

            return{
                tasksData: newArray
            }
        })
    };

    // filterActive = ((item) => {
    //     // this.setState(({tasksData}) => {
    //     //     const newItem = tasksData.filter((el) => {
    //     //         let {status} = el
    //     //         if (status !== 'active') {
    //     //             console.log(status)
    //     //         }
    //     //     })
    //     //     const newArray = [...newItem]
    //     //     return {
    //     //         tasksData: newArray
    //     //     }
    //     // })
    //     return item.filter((el) => !el.active)
    // })
    //
    //
    // filterDone = ((item) => {
    //     // this.setState(({ tasksData }) => {
    //     //     const newItem = tasksData.filter((el) => el.active);
    //     //     const newArray = [...newItem]
    //     //     return {
    //     //         tasksData: newArray
    //     //     }
    //     // })
    //     return item.filter((el) => el.active)
    // })
    //
    // filterAll = (() =>{
    //     return this.state.tasksData
    // })

    filterChange = (newFilter) => {
        this.setState(({ filter }) =>{
            return {
                filter: newFilter
            }
        })
    }
    filterComAll = () =>{
        this.setState(({tasksData}) => {
            const idx = tasksData.filter((el) => !el.active)
            const newArray = [...idx];
            return{
                tasksData: newArray
            }
        })
    }

    filterData = (item, filter) =>{
        switch (filter){
            case "active":
                return item.filter((el) => !el.active);
            case "completed":
                return item.filter((el) => el.active);
            case "all":
                return item;
            default:
                return item
        }
    }

    onToggleLeft = (id) =>{
        this.setState( ({ tasksData }) =>{
            const idx = tasksData.findIndex((el) => el.id === id);
            const newArray = [...tasksData.slice(0, idx), ...tasksData.slice(idx +1)];
            return{
                tasksData: newArray
            }
        })
    };

    render(){
        const leftCount = this.state.tasksData.filter((el) => el.active).length;
        const activeCount= this.state.tasksData.length - leftCount;
        const item = this.state.tasksData
        const filter = this.state.filter;
        const visibleList = this.filterData(item, filter)
        return (
            <section className='todoapp'>
                <AppHeader addItem={this.addItem}/>
                    <section className='mane'>
                        <TaskList
                            visibleItems={visibleList}
                            filterChange={this.filterChange}
                            todos={this.state.tasksData}
                            onToggleActive = {this.onToggleActive}
                            onToggleLeft = {this.onToggleLeft}
                        />
                        <Footer
                            clearFilter={this.filterComAll}
                            filterChange={this.filterChange}
                            active={activeCount}
                            left={leftCount} />
                    </section>
            </section>
        )
    }
}



import React from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:number)=>void
    filter:FilterValueType
    changeFilter:(filter:FilterValueType)=>void
}

export const Todolist = (props: PropsType) => {
    const getTaskListItem = (t:TaskType) => {
        return (
            <li key={t.id} >
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={()=>props.removeTask(t.id)}>x</button>
            </li>
        )
    }
    const tasksList = props.tasks.map(getTaskListItem)
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasksList}
        </ul>
        <div>
            <button onClick={()=>props.changeFilter("all")}>All</button>
            <button onClick={()=>props.changeFilter("active")}>Active</button>
            <button onClick={()=>props.changeFilter("completed")}>Completed</button>
        </div>
    </div>
};
import React, {useState, KeyboardEvent, ChangeEvent,MouseEvent} from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    filter: FilterValueType
    changeFilter: (filter: FilterValueType) => void
}

export const Todolist = (props: PropsType) => {
    const [title, setTitle] = useState<string>("");
    const getTaskListItem = (t: TaskType) => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>x</button>
            </li>
        )
    }
    const tasksList = props.tasks.map(getTaskListItem)
    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    }
    const onClickChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const setAllButton = (e:MouseEvent<HTMLButtonElement>) => {
      setAll(e.currentTarget.name)
    }
    const setAll = (name:string) => {
        props.changeFilter(name as FilterValueType)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input

                value={title}
                onChange={onClickChangeTitle}
                onKeyPress={onKeyPressAddTask}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {tasksList}
        </ul>
        <div>
            <button name={"all"} onClick={setAllButton}>All</button>
            <button name={"active"} onClick={setAllButton}>Active</button>
            <button name={"completed"} onClick={setAllButton}>Completed</button>
        </div>
    </div>
};

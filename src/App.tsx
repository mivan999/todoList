import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"

function App() {
    //bll
    console.log(typeof v1())
    const todoListTitle: string = "What to learn"
    const [filter, setFilter] = useState<FilterValueType>("all");
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},

    ])

    const changeFilter = (filter: FilterValueType) => setFilter(filter)
    const removeTask = (id: string) => {
        const filteredTasks: TaskType[] = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)

    }
    const addTask = (title:string) => {
        setTasks([{
            id: v1(),
            title,
            isDone: false
        }, ...tasks])
    }


    const getTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(t => t.isDone);
            case "active":
                return tasks.filter(t => !t.isDone);

            default:
                return tasks;
        }
    }
//UI
    return (
        <div className="App">
            <Todolist
                filter={filter}
                title={todoListTitle}
                tasks={getTasksForRender()}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValueType = "all" | "active" | "completed"

function App() {
    //bll
    const todoListTitle: string = "What to learn"
    const [filter, setFilter] = useState<FilterValueType>("all");
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},

    ])

    const changeFilter=(filter:FilterValueType)=>setFilter(filter)
    const removeTask = (id: number) => {
        const filteredTasks: TaskType[] = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)

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
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;

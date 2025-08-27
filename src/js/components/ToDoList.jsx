import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
// index.css'
import '../../styles/index.css'

function ToDoList() {
    const [task, setTask] = useState("")
    const [taskListArr, setTaskListArr] = useState([])           //Array que contiene las tareas 
    const [isHovered, setIsHovered] = useState(null);


    function generateId() {
        let max = 0;
        taskListArr.forEach(item => {
            if (item.id > max) {
                max = item.id
            }
        })
        return (max + 1);
    }

    function addTask(e) {
        setTask(e.target.value);
        if (e.key === "Enter") {
            const newTask = { id: generateId(), name: task };
            setTaskListArr([newTask, ...taskListArr]);
            setTask("");
        }
        console.log(taskListArr);
    }

    function deleteTask(id) {
        const updatedTaskListArr = taskListArr.filter(item => item.id != id);
        setTaskListArr(updatedTaskListArr);
    }

    function TasksInTotal() {
        if (taskListArr.length === 0) return <div className="text-success" >¡No hay tareas por hacer!</div>;
        if (taskListArr.length === 1) return <div>Ahora mismo tienes <b>{taskListArr.length}</b> tarea por hacer</div>;
        if (taskListArr.length > 1) return <div>Ahora mismo tienes <b>{taskListArr.length}</b> tareas por hacer</div>;
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <h1>Tareas pendientes</h1>
                        <input type="text"
                            className="form-control mb-3"
                            placeholder="Añade tu tarea..."
                            value={task}
                            onChange={(e) => { addTask(e) }} onKeyDown={(e) => { addTask(e) }} />
                        <ul className="list-group">
                            {
                                taskListArr.map((item) => (
                                    <li key={item.id} className={"list-group-item addedTask" + (isHovered === item.id ? " highlited" : "")} onMouseEnter={() => setIsHovered(item.id)} onMouseLeave={() => setIsHovered(null)}
                                    > {item.name}

                                        {isHovered === item.id ? (
                                            <img className="ms-auto" src="src/img/bin.png" onClick={() => { deleteTask(item.id) }} />
                                        ) : null}
                                    </li>
                                ))
                            }
                            <TasksInTotal />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ToDoList;
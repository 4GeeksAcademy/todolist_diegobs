// VOLVER MÁS ADELANTE E INTENTAR HACER QUE FUNCIONE
// ESTA LISTA NO TIENE UNA FUNCIÓN ADDTASK, SI NO QUE LO HACE DIRECTAMENTE EN EL RETURN (Y ESO ES LO QUE ME ESTÁ DANDO PROBLEMAS)
// Está hecha siguiendo el vídeo tutorial que aparece en el apartado del proyecto 4Geeks ToDolist usando React

import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../../styles/index.css'

// components

function ToDoList() {
	const [task, setTask] = useState("")
	const [taskListArr, setTaskListArr] = useState([])           //Array que contiene las tareas 

	function addTask(e) {
		console.log(e);
	}

	function TasksInTotal() {
		if (taskListArr.length === 0) return <div>¡No hay tareas por hacer!</div>;
		if (taskListArr.length === 1) return <div>Ahora mismo tienes <b>{taskListArr.length}</b> tarea por hacer</div>;
		if (taskListArr.length > 1) return <div>Ahora mismo tienes <b>{taskListArr.length}</b> tareas por hacer</div>;
	}

	function deleteTask(id) {

	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col">
					<ul className="list-group">
						<li className="list-group-item list-group-item-primary">Lista de tareas</li>
						<input type="text" className='form-control mb-3' placeholder="Añade tu tarea..."
							onChange={(e) => setTask(e.target.value)}
							value={task}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									setTaskListArr(taskListArr.concat(task));
									setTask("");
								}
								console.log(taskListArr)
							}} ></input>
						{taskListArr.map((t) => (
							<li className="list-group-item addedTask" key={t.length + 1}>
								<input className="form-check-input me-2" type="checkbox" onChange={(e) => (e.target.checked = true ? "on" : "off")} />
								<label className="form-check-label w-100 d-flex">{t} </label>
								<img className="ms-auto" src="src/img/bin.png" />
							</li>
						))}
						<TasksInTotal />
					</ul>
				</div>
			</div>
		</div>
	)
}
export default ToDoList;
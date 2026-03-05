import React,{useState,useEffect} from "react"
import Column from "./Column"
import TaskModal from "./TaskModal"

const defaultTasks = [
]

function Board({search}){

const [tasks,setTasks] = useState(()=>{
const saved = localStorage.getItem("kanbanTasks")
return saved ? JSON.parse(saved) : defaultTasks
})

const [showModal,setShowModal] = useState(false)

useEffect(()=>{
localStorage.setItem("kanbanTasks",JSON.stringify(tasks))
},[tasks])

const addTask = (task)=>{
setTasks([...tasks,task])
}

const deleteTask = (id)=>{
setTasks(tasks.filter(t=>t.id !== id))
}

const updateTask = (updated)=>{
setTasks(tasks.map(t=>t.id===updated.id ? updated : t))
}

const moveTask = (id,status)=>{
setTasks(tasks.map(t =>
t.id === Number(id) ? {...t,status} : t
))
}

const filteredTasks = tasks.filter(t =>
t.title.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="boardWrapper">

<button className="addTaskBtn"
onClick={()=>setShowModal(true)}
>
+ Add Task
</button>

<div className="board">

<Column
title="Todo"
status="todo"
tasks={filteredTasks}
moveTask={moveTask}
deleteTask={deleteTask}
updateTask={updateTask}
/>

<Column
title="In Progress"
status="progress"
tasks={filteredTasks}
moveTask={moveTask}
deleteTask={deleteTask}
updateTask={updateTask}
/>

<Column
title="Done"
status="done"
tasks={filteredTasks}
moveTask={moveTask}
deleteTask={deleteTask}
updateTask={updateTask}
/>

</div>

{showModal &&
<TaskModal
addTask={addTask}
close={()=>setShowModal(false)}
/>
}

</div>

)
}

export default Board
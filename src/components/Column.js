import React from "react"
import TaskCard from "./TaskCard"

function Column({ title, status, tasks, moveTask, deleteTask, updateTask }) {

const allowDrop = (e)=>{
e.preventDefault()
}

const drop = (e)=>{
e.preventDefault()
const id = Number(e.dataTransfer.getData("id"))
moveTask(id,status)
}

return(

<div
className="column"
onDragOver={allowDrop}
onDrop={drop}
>

<h2>
{title} ({tasks.filter(task => task.status === status).length})
</h2>

{tasks
.filter(task => task.status === status)
.map(task => (

<TaskCard
key={task.id}
task={task}
deleteTask={deleteTask}
updateTask={updateTask}
/>

))}

</div>

)

}

export default Column
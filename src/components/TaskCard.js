import React, { useState } from "react"

function TaskCard({ task, deleteTask, updateTask }) {

const [editing,setEditing] = useState(false)
const [title,setTitle] = useState(task.title)
const [description,setDescription] = useState(task.description)

const drag = (e)=>{
e.dataTransfer.setData("id",task.id)
}

const saveEdit = ()=>{
updateTask({
...task,
title:title,
description:description
})
setEditing(false)
}

/* Progress based on column */
const progress =
task.status === "todo" ? 0 :
task.status === "progress" ? 50 :
100

return(

<div
className={`task ${task.priority}`}
draggable={!editing}
onDragStart={drag}
>

<div className={`priority ${task.priority}`}>
{task.priority}
</div>

{editing ? (

<>
<input
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<div className="taskButtons">
<button onClick={saveEdit}>Save</button>
<button onClick={()=>setEditing(false)}>Cancel</button>
</div>
</>

) : (

<>
<h3>{task.title}</h3>
<p>{task.description}</p>

{/* Progress Bar */}
<div className="progressBar">
<div style={{width:`${progress}%`}}></div>
</div>

<div className="taskButtons">

<button onClick={()=>setEditing(true)}>
Edit
</button>

<button onClick={()=>deleteTask(task.id)}>
Delete
</button>

</div>

</>

)}

</div>

)

}

export default TaskCard
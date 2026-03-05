import React, { useState } from "react";

function TaskModal({ addTask, close }) {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("low");

const submit = () => {

if (!title.trim()) return;

const newTask = {
id: Date.now(),
title: title,
description: description,
priority: priority,
status: "todo"
};

addTask(newTask);
close();

};

return (

<div className="modal">

<div className="modalContent">

<h2>Add Task</h2>

<input
placeholder="Task title"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>

<textarea
placeholder="Description"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>

<select
value={priority}
onChange={(e) => setPriority(e.target.value)}
>
<option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>
</select>

<div className="modalButtons">

<button onClick={submit}>Add</button>
<button onClick={close}>Cancel</button>

</div>

</div>

</div>

);

}

export default TaskModal;
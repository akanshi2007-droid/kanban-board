import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {

const [theme, setTheme] = useState("dark");
const [search, setSearch] = useState("");

const toggleTheme = () => {
setTheme(theme === "dark" ? "light" : "dark");
};

return (

<div className={`App ${theme}`}>

{/* Animated background */}
<div className="bgDots"></div>

<header className="header">

<h1>Kanban Task Board</h1>

<div className="controls">

<input
type="text"
placeholder="Search tasks..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

<button onClick={toggleTheme}>
Toggle Theme
</button>

</div>

</header>

<Board search={search} />

</div>

);

}

export default App;
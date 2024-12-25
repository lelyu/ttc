import React, { useState } from "react"
import "../styles/OperationMenu.css"
const OperationMenu = () => {
	const [status, setStatus] = useState("None Selected")

	const handleStart = () => setStatus("Add a new app")
	const handleStop = () => setStatus("Delete Selected")
	const handleReset = () => setStatus("Select All")

	return (
		<>
			<h1>Operation Menu</h1>
			<div className="button-group">
				<button onClick={handleStart}>Add a new app</button>
				<button onClick={handleStop}>Delete Selected</button>
				<button onClick={handleReset}>Select All</button>
			</div>
			<p>Status: {status}</p>
		</>
	)
}

export default OperationMenu

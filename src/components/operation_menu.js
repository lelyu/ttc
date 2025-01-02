import React, { useState } from "react"
import "../styles/OperationMenu.css"

const OperationMenu = ({ onSelectAll }) => {
	const [status, setStatus] = useState("None Selected")

	const handleAddMenu = () => setStatus("Adding A New App")
	const handleDeleteMenu = () => setStatus("Deleting Selected")

	// This triggers the parent's handleSelectAll, setting all checkboxes to true
	const handleSelectAllMenu = () => {
		setStatus("Selecting All")
		onSelectAll()
	}

	const handleAdd = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const formProps = Object.fromEntries(formData.entries())
		alert(
			`App Name: ${formProps.appName}, App Notes: ${formProps.appNotes}, App URI: ${formProps.appURI}`
		)
	}

	return (
		<>
			<h1>Operation Menu</h1>
			<div className="button-group">
				<button onClick={handleAddMenu}>Add a new app</button>
				<button onClick={handleDeleteMenu}>Delete Selected</button>
				<button onClick={handleSelectAllMenu}>Select All</button>
			</div>
			<p>Status: {status}</p>

			{status === "Adding A New App" && (
				<form onSubmit={handleAdd}>
					<label>
						App Name:
						<input type="text" name="appName" />
					</label>
					<label>
						App Notes:
						<input type="text" name="appNotes" />
					</label>
					<label>
						App URI:
						<input type="text" name="appURI" />
					</label>
					<button type="submit">Add</button>
				</form>
			)}
		</>
	)
}

export default OperationMenu

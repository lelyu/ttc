import React, { useState } from "react"
import "../styles/OperationMenu.css"

const OperationMenu = ({ onToggleAll }) => {
	const [status, setStatus] = useState("None Selected")
	const [allSelected, setAllSelected] = useState(false)

	const handleAddMenu = () => setStatus("Adding A New App")
	const handleDeleteMenu = () => setStatus("Deleting Selected")

	const handleSelectAllMenu = () => {
		if (allSelected) {
			setStatus("Unselecting All")
			setAllSelected(false)
			onToggleAll(false) // Pass 'false' to the parent to uncheck everything
		} else {
			setStatus("Selecting All")
			setAllSelected(true)
			onToggleAll(true) // Pass 'true' to the parent to check everything
		}
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

				{allSelected ? (
					<button onClick={handleSelectAllMenu}>Unselect All</button>
				) : (
					<button onClick={handleSelectAllMenu}>Select All</button>
				)}
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

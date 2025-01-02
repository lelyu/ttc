import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import OperationMenu from "./components/operation_menu"
import ItemMenu from "./components/item_menu"

function App() {
	// Load your data
	const mockData = require("./mockData.json")
	console.log(mockData)

	// Maintain the checked items in the parent
	// Key: index of the item in mockData, Value: true/false
	const [checkedItems, setCheckedItems] = useState({})

	// When an individual checkbox changes, update our parent's state
	const handleCheckboxChange = (index, isChecked) => {
		setCheckedItems((prev) => ({
			...prev,
			[index]: isChecked,
		}))
	}

	// When "Select All" is clicked, mark *every* item as checked
	const handleSelectAll = () => {
		const allChecked = mockData.reduce((acc, item, index) => {
			acc[index] = true
			return acc
		}, {})
		setCheckedItems(allChecked)
	}

	return (
		<>
			<h1>Welcome to TTC</h1>
			<div className="App">
				<div className="operation-menu">
					{/* Pass down the handler so OperationMenu can trigger "Select All" */}
					<OperationMenu onSelectAll={handleSelectAll} />
				</div>
				<div className="item-menu">
					{/* Pass the checked state and updater to ItemMenu */}
					<ItemMenu
						data={mockData}
						checkedItems={checkedItems}
						onCheckboxChange={handleCheckboxChange}
					/>
				</div>
			</div>
		</>
	)
}

export default App

import React, { useState } from "react"
import "./App.css"
import OperationMenu from "./components/operation_menu"
import ItemMenu from "./components/item_menu"

function App() {
	const mockData = require("./mockData.json")

	// Keep track of which items are checked (by index)
	const [checkedItems, setCheckedItems] = useState({})

	// Handler for a single checkbox
	const handleCheckboxChange = (index, isChecked) => {
		setCheckedItems((prev) => ({
			...prev,
			[index]: isChecked,
		}))
	}

	// New toggle function:
	// If "isSelectAll" is true, check every item.
	// If "isSelectAll" is false, uncheck every item.
	const handleToggleAll = (isSelectAll) => {
		if (isSelectAll) {
			// Select all
			const allChecked = mockData.reduce((acc, _, index) => {
				acc[index] = true
				return acc
			}, {})
			setCheckedItems(allChecked)
		} else {
			// Unselect all
			setCheckedItems({})
		}
	}

	return (
		<>
			<h1>Welcome to TTC</h1>
			<div className="App">
				<div className="operation-menu">
					{/*
            Pass down handleToggleAll.
            Notice we no longer just have a "handleSelectAll".
            Instead, we can toggle based on a boolean.
          */}
					<OperationMenu onToggleAll={handleToggleAll} />
				</div>

				<div className="item-menu">
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

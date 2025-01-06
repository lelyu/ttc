import React, { useState } from "react"
import "./App.css"
import OperationMenu from "./components/operation_menu"
import ItemMenu from "./components/item_menu"

function App() {
	const mockData = require("./mockData.json")

	const [checkedItems, setCheckedItems] = useState({})

	const handleCheckboxChange = (index, isChecked) => {
		setCheckedItems((prev) => ({
			...prev,
			[index]: isChecked,
		}))
	}

	const handleToggleAll = (isSelectAll) => {
		if (isSelectAll) {
			const allChecked = mockData.reduce((acc, _, index) => {
				acc[index] = true
				return acc
			}, {})
			setCheckedItems(allChecked)
		} else {
			setCheckedItems({})
		}
	}

	return (
		<>
			<h1>Welcome to TTC</h1>
			<div className="App">
				<div className="operation-menu">
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

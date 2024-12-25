import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import OperationMenu from "./components/operation_menu"
import ItemMenu from "./components/item_menu"

function App() {
	const mockData = require("./mockData.json")
	console.log(mockData)
	return (
		<>
			<h1>Welcome to TTC</h1>
			<div className="App">
				<div className="operation-menu">
					<OperationMenu />
				</div>
				<div className="item-menu">
					<ItemMenu data={mockData} />
				</div>
			</div>
		</>
	)
}

export default App

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
			<h1>Welcome to the teaching tools collection</h1>
			<OperationMenu />
			<ItemMenu data={mockData} />
		</>
	)
}

export default App

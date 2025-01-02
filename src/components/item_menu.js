import React from "react"
import "../styles/ItemMenu.css"

const ItemMenu = ({ data, checkedItems, onCheckboxChange }) => {
	return (
		<>
			<h1>My Apps</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>
						<input
							type="checkbox"
							// Convert undefined to false with !!
							checked={!!checkedItems[index]}
							onChange={(e) =>
								onCheckboxChange(index, e.target.checked)
							}
						/>
						<strong>{item.app_name}</strong>
						<p>{item.app_description}</p>
						<a
							href={item.app_uri}
							target="_blank"
							rel="noopener noreferrer">
							{item.app_uri}
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default ItemMenu

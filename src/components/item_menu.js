import React from "react"

const ItemMenu = ({ data }) => {
	return (
		<>
			<h1>My Apps</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>
						<h2>{item.app_name}</h2>
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

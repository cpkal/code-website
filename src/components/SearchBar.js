'use client'

import { useState } from "react";

export default function SearchBar() {
	// create usestate for focus state
	const [focus, setFocus] = useState(false)

	const handleFocus = () => {
		setFocus(true)
		console.log(focus)
	}

	const handleBlur = () => {
		setFocus(false)
		console.log(focus)
	}

	return(
		<>
			<input type="text"  className="w-full border-accent border-4 rounded" onFocus={handleFocus} onBlur={handleBlur} />
			{ focus && (
				<div className="absolute w-auto bg-white border-accent border-4 rounded">
					<ul>
						<li className="p-2 border-b">Item 1</li>
						<li className="p-2 border-b">Item 2</li>
						<li className="p-2 border-b">Item 3</li>
					</ul>
				</div>
			)
			}
		</>
	)
}
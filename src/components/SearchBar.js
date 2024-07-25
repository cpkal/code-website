'use client'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
			<FontAwesomeIcon icon={faSearch} height={15} width={15} className="translate-x-4 text-foreground" />
			<input type="text"  className="border-b-2 focus:outline-none focus:border-b-2 focus:border-sky-500 pl-6" onFocus={handleFocus} onBlur={handleBlur} />
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
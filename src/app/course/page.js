export default function Course() {
	return (
		<div className="flex justify-center h-screen">
			{/* sidebar */}
			<div className="w-1/6 h-screen bg-gray-200 m-4 rounded-md">
				<ul>
					<li className="p-4 border-b">HTML</li>
					<li className="p-4 border-b">CSS</li>
					<li className="p-4 border-b">JavaScript</li>
				</ul>
			</div>
			{/* main content */}
			<div className="w-5/6 p-4">
				<div className="search">
					<input type="text" placeholder="Search" className="w-full px-2 py-1 border rounded" />
				</div>
				<div className="grid grid-cols-4 mt-2">
					{/* cards */}
					<div className="bg-white shadow rounded p-1">
						<img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
						<h3 className="text-lg font-bold mt-2">Card 1</h3>
						<p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
					</div>
					<div className="bg-white shadow rounded p-1">
						<img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
						<h3 className="text-lg font-bold mt-2">Card 1</h3>
						<p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
					</div>
					<div className="bg-white shadow rounded p-1">
						<img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
						<h3 className="text-lg font-bold mt-2">Card 1</h3>
						<p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
					</div>
					<div className="bg-white shadow rounded p-1">
						<img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
						<h3 className="text-lg font-bold mt-2">Card 1</h3>
						<p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
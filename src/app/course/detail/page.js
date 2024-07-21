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
			<video className="bg-white shadow rounded w-full" controls></video>
			<p>Non minim cupidatat Lorem ipsum cillum ut laborum ex velit proident excepteur proident.</p>
			<div className="next and prev section">
				<button className="bg-white shadow rounded p-1 w-1/2">Prev</button>
				<button className="bg-white shadow rounded p-1 w-1/2">Next</button>
			</div>
				
			</div>
		</div>
	);
}
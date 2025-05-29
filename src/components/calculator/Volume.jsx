import React, { useState } from 'react';

const Volume = () => {
	const [length, setLength] = useState('');
	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');
	const [volume, setVolume] = useState(null);

	const calculateVolume = (e) => {
		e.preventDefault();
		const l = parseFloat(length);
		const w = parseFloat(width);
		const h = parseFloat(height);
		if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
			setVolume(l * w * h);
		} else {
			setVolume(null);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4 text-center">Volume Calculator</h2>
			<form onSubmit={calculateVolume} className="space-y-4">
				<div>
					<label className="block mb-1 font-medium">Length</label>
					<input
						type="number"
						value={length}
						onChange={(e) => setLength(e.target.value)}
						className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
						placeholder="Enter length"
						min="0"
						step="any"
						required
					/>
				</div>
				<div>
					<label className="block mb-1 font-medium">Width</label>
					<input
						type="number"
						value={width}
						onChange={(e) => setWidth(e.target.value)}
						className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
						placeholder="Enter width"
						min="0"
						step="any"
						required
					/>
				</div>
				<div>
					<label className="block mb-1 font-medium">Height</label>
					<input
						type="number"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
						className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
						placeholder="Enter height"
						min="0"
						step="any"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
				>
					Calculate Volume
				</button>
			</form>
			{volume !== null && (
				<div className="mt-6 text-center">
					<span className="text-lg font-semibold">Volume: </span>
					<span className="text-lg">{volume}</span>
				</div>
			)}
		</div>
	);
};

export default Volume;

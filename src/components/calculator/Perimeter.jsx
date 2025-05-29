import React, { useState } from 'react';

const Perimeter = () => {
	const [length, setLength] = useState('');
	const [width, setWidth] = useState('');
	const [perimeter, setPerimeter] = useState(null);

	const handleCalculate = (e) => {
		e.preventDefault();
		const l = parseFloat(length);
		const w = parseFloat(width);
		if (!isNaN(l) && !isNaN(w)) {
			setPerimeter(2 * (l + w));
		} else {
			setPerimeter(null);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4 text-center">
				Perimeter Calculator (Rectangle)
			</h2>
			<form onSubmit={handleCalculate} className="space-y-4">
				<div>
					<label className="block text-gray-700 mb-1">Length</label>
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
					<label className="block text-gray-700 mb-1">Width</label>
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
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
				>
					Calculate Perimeter
				</button>
			</form>
			{perimeter !== null && (
				<div className="mt-6 text-center text-lg font-semibold text-green-700">
					Perimeter: {perimeter}
				</div>
			)}
		</div>
	);
};

export default Perimeter;

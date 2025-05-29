import { useState } from 'react';

export default function Calc() {
	const [input, setInput] = useState('');

	const handleClick = (value) => {
		setInput((prev) => prev + value);
	};

	const handleClear = () => {
		setInput('');
	};

	const handleEqual = () => {
		try {
			// eslint-disable-next-line no-eval
			setInput(String(eval(input)));
		} catch {
			setInput('Error');
		}
	};

	const buttons = [
		'7',
		'8',
		'9',
		'/',
		'4',
		'5',
		'6',
		'*',
		'1',
		'2',
		'3',
		'-',
		'0',
		'.',
		'C',
		'+',
	];

	return (
		<div className="flex items-center justify-center min-h-[70vh] bg-gray-100">
			<div className="bg-white rounded-lg shadow-lg p-6 w-80">
				<div className="mb-4 bg-gray-200 rounded text-right p-4 text-2xl font-mono min-h-[3rem] break-all">
					{input || '0'}
				</div>
				<div className="grid grid-cols-4 gap-3">
					{buttons.map((btn) =>
						btn === 'C' ? (
							<button
								key={btn}
								onClick={handleClear}
								className="bg-red-400 text-white rounded py-2 text-xl hover:bg-red-500"
							>
								C
							</button>
						) : (
							<button
								key={btn}
								onClick={() => handleClick(btn)}
								className="bg-gray-300 rounded py-2 text-xl hover:bg-gray-400"
							>
								{btn}
							</button>
						)
					)}
					<button
						className="col-span-4 bg-blue-500 text-white rounded py-2 text-xl mt-2 hover:bg-blue-600"
						onClick={handleEqual}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

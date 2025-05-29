import { useEffect, useRef, useState } from 'react';
import './Counter.css';

export default function Counter() {
	const [level, setLevel] = useState(10);
	const waterRef = useRef(null);
	let a = 100;
	useEffect(() => {
		waterRef.current.style.height = `${level}%`;
	}, [level]);

	function handleIncr() {
		if (level < 100) {
			setLevel(level + 10);
		}
	}
	function handleDecr() {
		if (level > 0) {
			setLevel(level - 10);
		}
	}

	return (
		<div id="counter">
			<div className="jar-cap">ds</div>
			<div className="jar">
				<div ref={waterRef} className="water">
					{level}%
				</div>
			</div>
			<button className="rounded bg-red-500 m-2 px-4" onClick={handleIncr}>
				fill
			</button>
			<button className="rounded bg-red-500 m-2 px-4" onClick={handleDecr}>
				empty
			</button>
		</div>
	);
}

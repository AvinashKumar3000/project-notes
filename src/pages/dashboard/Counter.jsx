import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className="bg-white text-black p-4">
            <button
                onClick={handleClick}
                className="bg-white text-black border border-black px-4 py-2 rounded"
            >
                count {count}
            </button>
        </div>
    )
}

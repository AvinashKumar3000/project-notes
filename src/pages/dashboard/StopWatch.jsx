import { useEffect, useRef, useState } from "react"

export default function StopWatch() {
    const [isStarted, setIsStarted] = useState(false);
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    function handleStart() {
        intervalRef.current = setInterval(() => {
            setCount((prev) => prev + 1); // sync
        }, 500); 
        setIsStarted(true);
    }
    function handleStop() {
        setIsStarted(false);
        clearInterval(intervalRef.current);
    }
    function handleReset() {
        clearInterval(intervalRef.current);
        setIsStarted(false);
        setCount(0);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="text-6xl font-mono font-bold text-white bg-gray-800 rounded-full w-48 h-48 flex items-center justify-center mb-8 border-8 border-yellow-400 shadow-inner">
                {count}
            </div>
            <div className="flex space-x-6">
                <button
                    disabled={isStarted}
                    onClick={handleStart}
                    className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow transition
                        ${isStarted ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                >
                    Start
                </button>
                <button
                    disabled={!isStarted}
                    onClick={handleStop}
                    className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow transition
                        ${!isStarted ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                >
                    Stop
                </button>
                <button
                    disabled={!isStarted}
                    onClick={handleReset}
                    className={`bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full shadow transition
                        ${!isStarted ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

import { useState } from "react";

export default function Area() {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);

    const area = length * width;

    return (
        <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow">
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                    Length:
                    <input
                        type="number"
                        value={length}
                        onChange={e => setLength(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                    Width:
                    <input
                        type="number"
                        value={width}
                        onChange={e => setWidth(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </label>
            </div>
            <div className="text-lg font-bold text-blue-700">
                Area: {area}
            </div>
        </div>
    );
}

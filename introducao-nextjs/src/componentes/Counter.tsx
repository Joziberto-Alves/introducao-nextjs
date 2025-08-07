"use client";

import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
                <h1 className="text-white text-2xl font-bold mb-4">
                Clique no contador
                </h1>
                <p className="text-white text-5xl font-bold mb-6">{counter}</p>
                <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-all shadow-md"
                onClick={() => setCounter(counter + 1)}
                >
                Click-me
                </button>
            </div>
        </div>
    );
}

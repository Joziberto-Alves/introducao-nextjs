"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeButton() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="flex">
                
                <Heart
                color="red"
                className=" transition-all mx-2"
                onClick={() => setCounter(counter + 1)}
                />
                <p className="text-white text-base font-bold mb-6">{counter}</p>
        </div>
    );
}

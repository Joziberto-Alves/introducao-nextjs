"use client";

import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { Power } from "lucide-react";

export default function Lampada() {
const [ligado, setLigado] = useState(false);
const [lampImage, setLampImage] = useState<string>("/lampDesl.png");

useEffect(() => {
    if (ligado === true) {
    setLampImage("/LampadaLigada.png");
    } else {
    setLampImage("/lampDesl.png");
    }
}, [ligado]);

return (
    <div className="w-full h-screen flex justify-center items-center gap-10">
    <div className="w-[280px] h-[400px] relative">
        <Image src={lampImage} alt="Lampada" fill />
    </div>

    <div className="w-[150px] h-[200px] relative">
        <button
        onClick={() => {
            setLigado(!ligado);
        }}
        className={`p-2 rounded-full ${
            ligado ? "bg-red-500" : "bg-green-500"
        } text-white`}
        >
        <Power size={24}/>
        </button>


    </div>
    </div>
);
}

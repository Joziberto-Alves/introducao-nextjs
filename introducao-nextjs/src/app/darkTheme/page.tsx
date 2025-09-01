'use client'

import ToggleDark from "@/componentes/ToggleDark"
import { useState } from "react"

export default function DarkTheme(){

    const [isDark, setIsDark] = useState(true)

    const handleToggle = () => {
        setIsDark(!isDark)
    }

    return (
        <div className={`h-screen flex flex-col justify-center items-center transition-all duration-700  ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
            <p className="text-2xl py-4">Página {isDark? 'LightTheme' : 'DarkTheme' }</p>

            <ToggleDark onToggle={handleToggle} isDark={isDark}/>
        </div>
    )
}
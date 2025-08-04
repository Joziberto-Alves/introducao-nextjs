'use client'

import { useState } from "react";
import { useEffect } from "react";
export default function ThemeToggle(){

    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
    if (!darkMode) {
        console.log("Dark mode enabled")
        document.documentElement.classList.add('bg-black', 'text-white', darkMode ? 'dark' : 'light')
    }else {
        document.documentElement.classList.remove('bg-black', 'text-white' , darkMode ? 'dark' : 'light')
    }
    },[darkMode])
    
    return(
        <div className="flex justify-center p-4">
            <h1 className="text-2xl mr-4">Theme Toggle</h1>
            <button onClick={() => {setDarkMode(!darkMode)}}
            className="p-2 rounded-full dark:bg-gray-800 transition"> {darkMode ? "🌙" : "🌞"}</button>
        </div>
    )
}
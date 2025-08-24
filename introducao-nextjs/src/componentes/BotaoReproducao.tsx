'use client'
import { useState } from "react"
import { Pause, PlayIcon } from "lucide-react"

export default function BotaoReproducao(){
    const [play, setPlay] = useState(false)

    return(
        <div>
            <button 
            className="rounded-full bg-gray-400 p-1.5 py-3.5 m-2"
            onClick={()=> setPlay(!play)}
            >
                <span>{play ?  <Pause className="transition-all mx-2"/> : <PlayIcon className="transition-all mx-2"/> }</span>
            </button>

        </div>
    )
}
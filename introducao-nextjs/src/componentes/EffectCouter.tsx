'use client'

import { useEffect, useState } from "react"



export default function EffectCounter() {

    const [count, setCount] = useState(0);

    // useEffect('função a executar', 'lista de dependência')

        useEffect(()=>{
            document.title = `Contagem: ${count}`
        }, [count])

    return(
        <div className="text-center p-10">
            <h1>Contagem: {count}</h1>
            <button className="bg-blue-500 rounded p-2 m-2"
            onClick={() => {setCount(count+1)}}>Incrementar</button>
            <button className="bg-blue-500 rounded p-2 m-2"
            onClick={() => {setCount(0)}}>Resetar</button>
        </div>
    )
}
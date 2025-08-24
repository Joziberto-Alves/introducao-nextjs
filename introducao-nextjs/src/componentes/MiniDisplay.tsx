'use client'

import { useState } from "react"


export default function MiniDisplay() {

    const [display, setDisplay] = useState('')
    // const []

    const handleOperatorClick = (operator: string) => {
    //Não deixo o user digitar um operador diferente
    // do primeiro operador que ele digitou
    const operators = ["+", "-", "*", "/"]

    const disableOperators = operators.filter((op) => op !== operator)
    // disableOperators = ["-", "*", "/"]

    // Se a tela já tem um operador diferente, não faz nada
    const hasAnotherOperator = disableOperators.some(
      (op) => display.includes(op)
    )
    if(hasAnotherOperator) return

    setDisplay(display + operator)

  }

    const backspace = () => {
        setDisplay(display.slice(0,-1))
    }

    // const resultado = () => {
    //     setDisplay(eval(display).toString())
    // }

    const calculate = () => {
        if (display.includes('+')){
            soma()
        }
        else if(display.includes('-')){
            subt()
        }
        else if(display.includes('*')){
            mult()
        }
        else if(display.includes('/')){
            divid()
        }
    }

    const soma = () => {
        const values = display.split('+')
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
            0
        )
        setDisplay(String(result))
    }

        const subt = () => {
        const values = display.split('-')
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora - Number(valorAtual),
            Number(values[0])
        )
        setDisplay(String(result))
    }

    const mult = () => {
        const values = display.split('*')
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora * Number(valorAtual),
            Number(values[0])
        )
        setDisplay(String(result))
    }

    const divid = () => {
        const values = display.split('/')
        const result = values.slice(1).reduce(
            (acumuladora, valorAtual) => acumuladora / Number(valorAtual),
            Number(values[0])
        )
        setDisplay(String(result))
    }

    // useEffect(()=>{
    //     if(display.length > 15){
            
    //     }
    // },
    // [display])


    return(
        <div className="flex flex-col items-center mt-10 bg">
            {/* display */}
            <div className="flex justify-center items-center rounded
            px-4 mx-2 w-60 h-15 mb-5 text-center text-xl border border-gray-400 overflow-x-auto overflow-y-hidden">
                {display}
            </div>
            {/* teclado numerico */}
            <div className="grid grid-cols-4 gap-2 w-60 h-80">
                <button 
                onClick={()=>{
                    setDisplay(display+0)
                }}
                className="bg-gray-300 rounded p-2">0</button>
                <button 
                onClick={()=>{
                    setDisplay(display+1)
                }}
                className="bg-gray-300 rounded p-2">1</button>
                <button 
                onClick={()=>{
                    setDisplay(display+2)
                }}
                className="bg-gray-300 rounded p-2">2</button>
                <button 
                onClick={()=>{
                    setDisplay('')
                }}
                className="bg-amber-200 rounded p-1 text-2xl">C</button>
                <button 
                onClick={()=>{
                    setDisplay(display+3)
                }}
                className="bg-gray-300 rounded p-2">3</button>
                
                <button 
                onClick={()=>{
                    setDisplay(display+4)
                }}
                className="bg-gray-300 rounded p-2">4</button>
                <button 
                onClick={()=>{
                    setDisplay(display+5)
                }}
                className="bg-gray-300 rounded p-2">5</button>
                <button 
                onClick={()=>{
                    backspace()
                }}
                className="bg-red-300 rounded p-2 ">
                    back
                </button>
                
                <button 
                onClick={()=>{
                    setDisplay(display+6)
                }}
                className="bg-gray-300 rounded p-2">6</button>
                
                <button 
                onClick={()=>{
                    setDisplay(display+7)
                }}
                className="bg-gray-300 rounded p-2">7</button>
                <button 
                onClick={()=>{
                    setDisplay(display+8)
                }}
                className="bg-gray-300 rounded p-2">8</button>
                <button 
                onClick={()=>{
                    handleOperatorClick("/")
                }}
                className="bg-gray-300 rounded p-1 text-2xl">/</button>
                <button 
                onClick={()=>{
                    handleOperatorClick("*")
                }}
                className="bg-gray-300 rounded p-1 text-xl">X</button>
                <button 
                onClick={()=>{
                    setDisplay(display+9)
                }}
                className="bg-gray-300 rounded p-2">9</button>
                
                <button 
                onClick={()=>{
                    handleOperatorClick("-")
                }}
                className="bg-gray-300 rounded p-1 text-2xl">-</button> 
                <button 
                onClick={()=>{
                    handleOperatorClick("+")
                }}
                className="bg-gray-300 rounded p-1 text-2xl">+</button>
                
                
                
                <button 
                onClick={()=>{
                    calculate()
                }}
                className="bg-gray-300 rounded p-1 text-2xl col-span-4">=</button>
                

            </div>
        </div>
    )
}
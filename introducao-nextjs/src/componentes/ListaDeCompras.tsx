'use client'

import { useState } from "react"

type ListaProps = {
    item: string
    comprado?: boolean
}

export default function ListaDeCompras({ lista }: { lista: ListaProps[] }) {
    const [itens, setItens] = useState(lista)

    const handleToggle = (index: number) => {
        setItens(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, comprado: !item.comprado } : item
            )
        )
    }

    return (
        <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-2xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800">🛒 Lista de Compras</h2>
            <ul className="space-y-3">
                {itens.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition"
                    >
                        <input
                            type="checkbox"
                            checked={item.comprado ?? false}
                            onChange={() => handleToggle(index)}
                            className="h-5 w-5 accent-green-600 cursor-pointer"
                        />
                        <span
                            className={`text-lg ${item.comprado
                                    ? 'line-through text-gray-400'
                                    : 'text-gray-800'
                                }`}
                        >
                            {item.item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

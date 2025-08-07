'use client'

import { useState } from "react"

type FormPost = {
    nome: string;
    mensagem: string;
    time: string;
}

type CommentFormProps = {
    setComentarios: React.Dispatch<React.SetStateAction<FormPost[]>>;
    comentarios: FormPost[];
};

export default function CommentForm({ setComentarios, comentarios }: CommentFormProps) {
    const [form, setForm] = useState<FormPost>({
        nome: '',
        mensagem: '',
        time: ''
    });

    const handleSubmit = () => {
        setComentarios([
        ...comentarios,
        { ...form, time: new Date().toLocaleString() }
        ]);
        console.log(comentarios);
    };

    return (
        <div className="flex items-center p-6 bg-gray-800 rounded-xl shadow-lg">
        <form className="w-full">
            {/* Campo Nome */}
            <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-white mb-1">
                Título:
            </label>
            <input
                id="title"
                type="text"
                placeholder="Insira o título."
                value={form.nome}
                required
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="border border-gray-500 bg-gray-700 text-white rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

            {/* Campo Mensagem */}
            <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Mensagem:
            </label>
            <textarea
                id="message"
                placeholder="Insira a mensagem."
                value={form.mensagem}
                required
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="border border-gray-500 bg-gray-700 text-white rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
            />
            </div>

            {/* Botão */}
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded w-full"
            onClick={(e) => {
                e.preventDefault();
                handleSubmit();
                setForm({ nome: "", mensagem: "", time: '' });
            }}
            >
            Enviar
            </button>
        </form>
        </div>
    );
}

'use client'

import CommentForm from "@/componentes/CommentForm";
import CommentList from "@/componentes/CommentList";
import { useState } from "react";

type FormPost = {
  nome: string;
  mensagem: string;
  time: string;
}

export default function CreateComment() {
    const [comentarios, setComentarios] = useState<FormPost[]>([]);

    return (
        <div className="min-h-screen bg-gray-800 flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-2xl bg-gray-600 rounded-2xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-white mb-4">Deixe seu comentário</h1>
            <CommentForm setComentarios={setComentarios} comentarios={comentarios} />
        </div>

        <div className="w-full max-w-2xl bg-gray-600 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Comentários</h2>
            <CommentList comentarios={comentarios} />
        </div>
        </div>
    );
}

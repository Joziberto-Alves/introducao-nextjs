import Comment from "./Comment"

type FormPost = {
    nome: string;
    mensagem: string;
    time: string;
};

export default function CommentList({ comentarios }: { comentarios: FormPost[] }) {
    return (
        <div className="space-y-4">
        {comentarios.length > 0 ? (
            comentarios.map((comentario, index) => (
            <div key={index}>
                <Comment
                nome={comentario.nome}
                mensagem={comentario.mensagem}
                time={comentario.time}
                />
            </div>
            ))
        ) : (
            <p className="text-gray-400 text-center">Nenhum comentário ainda. Seja o primeiro!</p>
        )}
        </div>
    );
}

import LikeButton from "./LikeButton";

type FormPost = {
    nome: string;
    mensagem: string;
    time: string;
};

export default function Comment({ nome, mensagem, time }: FormPost) {
    return (
        <div className="max-w-md mx-auto my-4">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
            <div className="flex justify-between items-center mb-2">
            <p className="text-blue-400 text-lg font-semibold">{nome}</p>
            <span className="text-gray-400 text-xs">{time}</span>
            </div>
            <p className="text-white text-base whitespace-pre-line break-words">{mensagem}</p>
            <div className="flex justify-end mt-4">
                <LikeButton />
            </div>
        </div>
        </div>
    );
}

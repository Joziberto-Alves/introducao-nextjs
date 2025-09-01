// PostCard.tsx
import { Heart } from "lucide-react"

type props = {
    title: string,
    text: string,
    author: string,
    likes?: number
    onLike: () => void
}

export default function PostCard({ title, text, author, likes, onLike }: props) {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-md mb-6 hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-xl font-bold text-gray-800 mb-2">{title}</h1>
            <p className="text-gray-700 mb-3 leading-relaxed">{text}</p>
            <p className="text-gray-500 text-sm">By <span className="font-semibold">{author}</span></p>

            <div className="flex justify-end mt-4">
                <button
                    onClick={onLike}
                    className="flex items-center space-x-2 px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
                >
                    <Heart
                        color={likes ? "red" : "gray"} 
                        fill={likes ? "red" : "white"}
                        className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-95"
                    />
                    <p className="text-gray-600 text-sm font-semibold">{likes}</p>
                </button>
            </div>
        </div>
    )
}

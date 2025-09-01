// FeedPage.tsx
'use client'

import { useState } from "react"
import PostCard from "./PostCard"

type Props = {
    posts: {
        title: string,
        text: string,
        author: string,
        likes?: number
    }[]
}

export default function FeedPage({ posts }: Props) {
    const [post, setPost] = useState(posts)

    const onLike = (index: number) => {
        const newPosts = [...post]
        newPosts[index].likes = (newPosts[index].likes || 0) + 1
        setPost(newPosts)
    }

    return (
        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg w-full max-w-lg space-y-4">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-8 drop-shadow-lg text-center">Posts recentes</h1>
            {post.map((post, index) => (
                <PostCard key={index} {...post} onLike={() => onLike(index)} />
            ))}
        </div>
    )
}

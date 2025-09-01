// FeedSocialPage.tsx
import FeedPage from "@/componentes/FeedPage"

const posts = [
    {
        title: "Post 1",
        text: "This is the first post",
        author: "Author 1"
    },
    {
        title: "Post 2",
        text: "This is the second post",
        author: "Author 2"
    },
    {
        title: "Post 3",
        text: "This is the third post",
        author: "Author 3"
    },
    {
        title: "Post 4",
        text: "This is the fourth post",
        author: "Author 4"
    },
    {
        title: "Post 5",
        text: "This is the fifth post",
        author: "Author 5"
    }
]

export default function FeedSocialPage() {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-400 min-h-screen flex flex-col items-center py-10 px-4">
            <FeedPage posts={posts} />
        </div>
    )
}

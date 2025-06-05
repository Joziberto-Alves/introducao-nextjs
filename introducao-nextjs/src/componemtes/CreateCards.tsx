
interface Card{
    title:string,
    content:string,
    icon:string
}

export default function Cards({title,content,icon}:Card){
    return(
            // <div className="bg-gray-500 p6 rounded-xl hover:shadow-md transition duration-300 w-1/5">
            //     <div className="text-4xl mb-4">{cards.icon}

            //     </div>
            //     <h1 className="text-xl font-semibold text-gray-800 mb-2">{cards.title}</h1>
            //     <p className="text-gray-600">{cards.content}</p>
            // </div>
    <div className="flex flex-wrap justify-center pt-10">
            <div
                className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300 w-81">
                <div className="text-4xl mb-4">{icon}</div>
                <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>
                <p className="text-gray-600">{content}</p>
            </div>
    </div>
    )

}
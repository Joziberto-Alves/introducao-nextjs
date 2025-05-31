import Image from "next/image";

export default function NavBar(){
    return(
    <div>
        <nav className="bg-amber-200 shadow-sm">
        <div className="px-4">
            <div className="flex justify-between h-16 items-center">
            
            <div className="flex items-center">
                <Image
                src="/nextjs-icon.svg"
                alt="Next.js logo"
                width={40}
                height={40}
                className=""
                />
                <span className="ml-2 dark:dark:text-gray-900">Next App</span>
            </div>

            <div className="flex space-x-6">
                <a href="" className="text-lg dark:text-gray-900 font-medium hover:text-indigo-400">
                Inicio
                </a>
                <a href="" className="text-lg dark:text-gray-900 font-medium hover:text-indigo-400">
                Recursos
                </a>
                <a href="" className="text-lg dark:text-gray-900 font-medium hover:text-indigo-400">
                contatos
                </a>
            </div>
            </div>
        </div>
        </nav>
    </div>
    )
}
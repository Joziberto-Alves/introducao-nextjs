import Image from "next/image";
interface NavBarProps {
        links: {
            label:string,
            href:string
        }[]
    }
export default function NavBar({links}: NavBarProps){
    
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
                    {
                    links.map((link, indice) => (
                        <a 
                        key={indice} 
                        href= {link.href} 
                        className="text-lg dark:text-gray-900 font-medium hover:text-indigo-400">{link.label}</a>
                    ))
                }
                {/* <a href={links[0].href} className="text-lg dark:text-gray-900 font-medium hover:text-indigo-400">
                {links[0].label}
                </a>
                <a href="" className="text-lg dark:text-gray-900 font-medium hover:text-indigo-400">
                {links.label}
                </a>
                <a href="" className="text-lg dark:text-gray-900 font-medium hover:text-indigo-400">
                {links.label}
                </a> */}
            </div>
            </div>
        </div>
        </nav>
    </div>
    )
}
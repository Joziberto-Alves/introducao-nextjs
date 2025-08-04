import Image from 'next/image';

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

export default function Cards({title,description,imageUrl}:CardProps){
    return(
        <div className="bg-gray-100 border-1 flex flex-col  items-center p-2  rounded-2xl w-1/5 hover:bg-gray-200 hover:shadow-xl">
            <h1 className='text-2xl '>{title}</h1>
            <h3 className='text-center'>{description}</h3>
            <Image src={imageUrl} width={150} height={150} alt="imagem" className='rounded'/>
        </div>
        
    )
}
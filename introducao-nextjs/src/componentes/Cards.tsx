import Image from 'next/image';

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    category?: string;
}

export default function Cards({title,description,imageUrl,category}:CardProps){
    return(
        <div className="bg-gray-100 border-1 flex flex-col  items-center p-2  rounded-2xl w-2xs hover:bg-gray-200 hover:shadow-xl">
            <h1 className='text-2xl text-center my-3'>{title}</h1>
            <h3 className='text-center text-1s'>{description}</h3>
            <p className='text-center text-blue-600 text-'>{category?.toLocaleUpperCase()}</p>
            <Image src={imageUrl} width={150} height={150} alt="imagem" className='rounded m-2
            '/>
        </div>

    )
}
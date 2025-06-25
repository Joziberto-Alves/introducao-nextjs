'use client'
// import Map from '@/componemtes/Map'
import dynamic from 'next/dynamic'


const Map = dynamic(
    () => import('@/componemtes/Map'),
    {ssr:false}
)
export default function MapPage() {
    return (
        <div className="h-screen flex flex-col items-center ">
            <h1 className="text-xl font-bold mb-4">Mapa com leaflet</h1>
            <p className="mb-4">
                Click nos marcadores para ver os detalhes dos locais
            </p>
            {/* {  MAP  } */}
            <Map/>
            
            
        </div>
    )
}
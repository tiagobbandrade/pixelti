import { BsArrowRight } from 'react-icons/bs' 
import Image from "next/image"
import gatewayImage from '../../../public/gateway-image.svg'

type GatewayCardT = {
    gatewayName: string
}

export default function GatewayCard({gatewayName}: GatewayCardT){
    return (
        <div className="max-w-[220px] px-9 py-11 border border-zinc-400 shadow-sm shadow-zinc-400 rounded-2xl flex flex-col items-center justify-center gap-3">
            <Image src={gatewayImage} alt="Imagem ilustrando um gateway"/>
            <hr className='max-w-[148px] w-full bg-zinc-300 mt-6'/>
            <span className='text-lg font-semibold uppercase'>
                {gatewayName}
            </span>
            <button className='px-[10px] py-[6px] rounded-md text-xs font-normal flex items-center gap-2 mt-1 bg-[#BFCF00] text-[#F4F4F4]'>
                Ver detalhes
                <BsArrowRight className='w-4 h-4'/>
            </button>
        </div>
    )
}
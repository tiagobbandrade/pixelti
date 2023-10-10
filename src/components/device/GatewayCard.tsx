import { BsArrowRight } from 'react-icons/bs' 
import Image from "next/image"
import gatewayImage from '../../public/gateway-image.svg'
import { useModalContext } from '@/contexts/ModalContext'
import { DeviceT } from '@/types/types';


export function GatewayCard({name, devices}: {name: string, devices: DeviceT}){
    const modalContext = useModalContext();

    function onOpenModal(){
        modalContext?.setGatewayData({name, devices})
        modalContext?.setIsOpen(true);
    }

    return (
        <div className="w-full px-9 py-11 border shadow-sm rounded-2xl flex flex-col items-center justify-center gap-3 border-zinc-400 shadow-zinc-400">
            <Image src={gatewayImage} alt="Imagem ilustrando um gateway"/>
            <hr className='w-3/5 bg-zinc-300 mt-6'/>
            <span className='text-lg font-semibold uppercase'>
                {name}
            </span>
            <button 
                onClick={onOpenModal}
                className='px-[10px] py-2 max-w-[128px] w-full rounded-md text-xs font-normal flex items-center justify-center gap-2 mt-1 bg-[#BFCF00] text-[#F4F4F4]'
            >
                Ver detalhes
                <BsArrowRight className='w-4 h-4'/>
            </button>
        </div>
    )
}
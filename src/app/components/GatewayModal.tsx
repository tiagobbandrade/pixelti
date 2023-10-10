import { AiOutlineClose } from 'react-icons/ai'
import DeviceCard from "./DeviceCard"

type DevicesT = {
    deviceId: number,
    deviceName: string
}

type GatewayModalT = {
    name: string,
    devices?: DevicesT[]
}

export function GatewayModal({name}: GatewayModalT){
    return (
        <div className="fixed top-0 left-0 p-9 w-full h-full flex items-center justify-center z-20 bg-opacity-50 bg-zinc-500">
            <div className="p-9 w-full h-full flex flex-col items-start justify-start rounded-3xl relative bg-zinc-100 md:w-3/5 xl:h-auto">
                <button className='bg-transparent border-none outline-none absolute top-6 right-6'>
                    <AiOutlineClose className="h-8 w-8"/>
                </button>
                <div className="flex flex-col gap-1">
                    <h3 className='text-2xl font-semibold'>{name}</h3>
                    <span className='text-xl text-zinc-500'>Dispositivos conectados</span>
                </div>
                <div className="w-full grid grid-cols-modal gap-6 overflow-auto py-4 xl:flex xl:items-start xl:justify-start xl:pb-4">
                    <DeviceCard />
                    <DeviceCard />
                    <DeviceCard />
                    <DeviceCard />
                    <DeviceCard />
                    <DeviceCard />
                </div>
            </div>
        </div>
    )
}
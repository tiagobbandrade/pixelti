import Image from "next/image";
import smartPlug from '../../../public/smart-plug.png'

export default function DeviceCard({modelId, _device}: {modelId: string, _device: string}){
    return (
        <div className="flex-shrink-0 p-8 flex flex-col items-center justify-center gap-1 rounded-xl border border-zinc-400">
            <Image src={smartPlug} alt="Imagem do dispositivo" />
            <h3 className="text-xl mt-5">{modelId}</h3>
            <span className="text-sm text-zinc-500">Dispositivo #{_device}</span>
        </div>
    )
}
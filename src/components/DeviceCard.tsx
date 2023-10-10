import Image from "next/image";
import smartPlug from '../../../public/smart-plug.png'

export default function DeviceCard(){
    return (
        <div className="flex-shrink-0 p-8 flex flex-col items-center justify-center gap-1 rounded-xl border border-zinc-400">
            <Image src={smartPlug} alt="Imagem do dispositivo" />
            <h3 className="text-xl mt-5">Smart Plug</h3>
            <span className="text-sm text-zinc-500">Dispositivo #33</span>
        </div>
    )
}
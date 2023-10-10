import { FiLogOut } from 'react-icons/fi'
import Image from "next/image";
import PixeltiLogo from '../../../public/pixelti-logo.svg'
import AvatarImage from '../../../public/profile-avatar.png'

export function Sidebar(){
    return(
        <nav className="fixed top-0 left-0 max-w-[232px] h-full w-full bg-zinc-900 py-8 px-6 flex flex-col items-center justify-between">
            <Image src={PixeltiLogo} alt="PixelTi Logo"/>
            <div className="flex items-center justify-center flex-col gap-1">
                <Image src={AvatarImage} alt="Foto de perfil" className="rounded-full w-20 h-20 object-cover"/>
                <span className="text-zinc-50 text-2xl ">Ana Souza</span>
                <button className='text-red-500 text-xl flex gap-2 items-center'>
                    Sair
                    <FiLogOut />
                </button>
            </div>
        </nav>
    )
}
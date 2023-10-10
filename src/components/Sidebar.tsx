import { FiLogOut } from 'react-icons/fi'
import { BiLeftArrow } from 'react-icons/bi';
import Image from "next/image";
import PixeltiLogo from '../../public/pixelti-logo.png'
import AvatarImage from '../../public/profile-avatar.png'

export function Sidebar({onClick, isHidden}: {onClick?: () => void, isHidden?: boolean}){
    return(
        <div className={`${isHidden ? 'hidden' : 'block'} fixed top-0 left-0 h-full w-full flex z-10 xl:sticky xl:w-[320px] xl:block`}>
            <nav className="max-w-[232px] h-full w-full py-8 px-6 flex flex-col items-center justify-between bg-zinc-900 z-10 xl:min-w-[320px] xl:h-screen">
                <Image src={PixeltiLogo} alt="PixelTi Logo" priority/>
                <button 
                    onClick={onClick} 
                    className='bg-transparent border-none text-zinc-50 self-end -mr-2 xl:hidden'
                >
                    <BiLeftArrow className="w-5 h-5"/>
                </button>
                <div className="flex items-center justify-center flex-col gap-1">
                    <Image 
                        src={AvatarImage} 
                        alt="Foto de perfil" 
                        className="rounded-full w-20 h-20 object-cover"
                    />
                    <span className="text-zinc-50 text-2xl">Ana Souza</span>
                    <button className='text-red-500 text-xl flex gap-2 items-center'>
                        Sair
                        <FiLogOut />
                    </button>
                </div>
            </nav>
            <div className='bg-zinc-500 bg-opacity-50 w-full h-full xl:hidden'></div>
        </div>
    )
}
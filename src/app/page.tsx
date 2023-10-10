'use client'
import { BiMenu } from 'react-icons/bi'
import { Searchbar } from '@/components/Searchbar'
import { GatewayGrid } from '@/components/device/GatewayGrid'
import { Sidebar } from '@/components/Sidebar'
import { GatewayModal } from '@/components/device/GatewayModal'
import { useModalContext } from '@/contexts/ModalContext'
import { useState } from 'react'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const modalContext = useModalContext();

  function changeVisibilityOfSidebar(){
    setShowSidebar(previousValue => !previousValue)
  }
  
  return (
    <div 
      className={`${showSidebar || modalContext?.isOpen ? 'overflow-hidden' : 'overflow-auto'} px-8 py-6 relative xl:px-0 xl:py-0 xl:flex`}
    >
      {modalContext?.isOpen && <GatewayModal />}
      <Sidebar onClick={changeVisibilityOfSidebar} isHidden={showSidebar}/>
      <div className='flex flex-col w-full xl:p-8'>
        <header className="flex items-center justify-center w-full gap-4">
          <button 
            onClick={changeVisibilityOfSidebar} 
            className='p-1 border-none outline-none bg-transparent xl:hidden'
          >
            <BiMenu className='w-9 h-9'/>
          </button>
            <div className='flex flex-col w-full xl:gap-3'>
              <h2 className='text-[30px] hidden xl:inline-block'>Gateways</h2>
              <Searchbar />
            </div>
        </header>
        <GatewayGrid />
      </div>
    </div>
  )
}

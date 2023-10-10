'use client'
import { BiMenu } from 'react-icons/bi'
import { Searchbar } from './components/Searchbar'
import { GatewayCard } from './components/GatewayCard'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  function changeVisibilityOfSidebar(){
    setShowSidebar(previousValue => !previousValue)
  }

  return (
    <div className="px-8 py-6 relative xl:px-0 xl:py-0 xl:flex">
      <div className='hidden xl:block'> {/* Obrigando a aparecer em telas maiores que 1280px*/}
        <Sidebar />
      </div>
      {showSidebar && <Sidebar onClick={changeVisibilityOfSidebar}/>}
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
        <main className='py-8 px-16 grid grid-cols-auto justify-items-center gap-6 xl:px-0'>
          <GatewayCard gatewayName='Gateway 1' />
          <GatewayCard gatewayName='Gateway 2' />
          <GatewayCard gatewayName='Gateway 3' />
          <GatewayCard gatewayName='Gateway 4' />
        </main>
      </div>
    </div>
  )
}

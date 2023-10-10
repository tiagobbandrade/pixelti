import { BiMenu } from 'react-icons/bi'
import { Searchbar } from './components/Searchbar'
import GatewayCard from './components/GatewayCard'

export default function Home() {
  return (
    <div className="px-8 py-6">
      <header className="flex items-center justify-center w-full gap-4">
        <button className='p-1 border-none outline-none bg-transparent'>
          <BiMenu className='w-9 h-9'/>
        </button>
          <Searchbar />
      </header>
      <main className='py-8 flex flex-col items-center justify-center gap-4'>
        <GatewayCard gatewayName='Gateway 1' />
        <GatewayCard gatewayName='Gateway 2' />
        <GatewayCard gatewayName='Gateway 3' />
        <GatewayCard gatewayName='Gateway 4' />
      </main>
    </div>
  )
}

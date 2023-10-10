import { useSearchContext } from '@/contexts/SearchContext'
import { BiSearch } from 'react-icons/bi'

export function Searchbar(){
  const searchContext = useSearchContext()

    return (
    <div className='w-full relative'>
      <input 
        onChange={(e) => searchContext?.setSearchParams(e.target.value)}
        type="text" 
        placeholder="Procure por um de seus gateways" 
        className='w-full p-2 pr-10 rounded-md bg-transparent border border-zinc-400 text-zinc-400 placeholder:text-zinc-400 outline-none font-light text-xs whitespace-nowrap overflow-hidden text-ellipsis xl:text-lg'
      />
      <button className='border-none outline-none bg-transparent'>
        <BiSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-zinc-400"/>
      </button>
    </div>
    )
}
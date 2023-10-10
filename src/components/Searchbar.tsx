import { BiSearch } from 'react-icons/bi'

export function Searchbar(){
    return (
    <div className='w-full relative'>
      <input 
        type="text" 
        placeholder="Procure por um de seus gateways" 
        className='w-full p-2 pr-10 rounded-md bg-transparent border border-zinc-500 font-light text-xs whitespace-nowrap overflow-hidden text-ellipsis xl:text-xl'
      />
      <button className='border-none outline-none bg-transparent'>
        <BiSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-zinc-500"/>
      </button>
    </div>
    )
}
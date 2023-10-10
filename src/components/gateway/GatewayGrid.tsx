'use client'
import { useSearchContext } from '@/contexts/SearchContext';
import { GatewayCard } from "./GatewayCard";
import data from '@/services/api.json'

export function GatewayGrid(){
    const searchContext = useSearchContext();

    return (
      <main className='py-8 grid grid-cols-auto justify-items-center gap-6 xl:px-0'>
        {searchContext?.searchParams ? (
          data.gateways.filter((gateway) =>
            gateway._id.includes(searchContext.searchParams) ||
            gateway.name.includes(searchContext.searchParams)
          )
        .map((filteredGateways) => (
          <GatewayCard
            key={filteredGateways._id}
            name={filteredGateways.name}
            devices={filteredGateways.devices}
          />
            )
          )
        ) 
        : 
        data.gateways.map((gateway) => (
          <GatewayCard 
            key={gateway._id} 
            name={gateway.name} 
            devices={gateway.devices}
          />
        ))}
      </main>
        
    )
}
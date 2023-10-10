'use client'
import data from '@/services/api.json'
import { GatewayCard } from "./GatewayCard";

export function GatewayGrid(){
    return (
      <main className='py-8 px-16 grid grid-cols-auto justify-items-center gap-6 xl:px-0'>
        {data.gateways.map((gateway) => (
          <GatewayCard key={gateway._id} name={gateway.name} devices={gateway.devices}/>
          ))}
      </main>
        
    )
}
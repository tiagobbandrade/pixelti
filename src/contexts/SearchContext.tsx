'use client'

import { SearchT } from "@/types/types";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

const SearchContext = createContext<SearchT | undefined>(undefined)

export function SearchContextProvider({children}: {children: ReactNode}){
    const [searchParams, setSearchParams] = useState<string>('');

    return(
        <SearchContext.Provider value={{searchParams, setSearchParams}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useModalContext(){
    return useContext(SearchContext)
}
import React, { useMemo, useState, useContext } from "react"

const SearchListContext = React.createContext()

export function SearchListProvider({children}) {
    const [searchList, setSearchList] = useState([])

    const value = useMemo(() => ({searchList, setSearchList}), [searchList])

    return <SearchListContext.Provider value={value}>{children}</SearchListContext.Provider>
}

export function useSearchList(){
    const  ctx = useContext(SearchListContext)
    if(!ctx) throw new Error("useSearchList deve ser usado dentro de <SearchListProvider>")
    return ctx
}
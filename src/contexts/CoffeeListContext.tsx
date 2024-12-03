import { createContext, ReactNode, useState } from 'react'

interface CoffeeListProviderProps {
  children: ReactNode
}

interface CoffeeOnList {
  id: string
  quantity: number
}

interface CoffeeListContextType {
  selectedCoffees: CoffeeOnList[]
  addCoffeeToList: (data: CoffeeOnList) => void
  updateCoffeeList: (data: CoffeeOnList[]) => void
}

export const CoffeeListContext = createContext({} as CoffeeListContextType)

export function CoffeeListProvider({ children }: CoffeeListProviderProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeOnList[]>([])

  function addCoffeeToList(newCoffe: CoffeeOnList) {
    setSelectedCoffees([...selectedCoffees, newCoffe])
  }

  function updateCoffeeList(updateList: CoffeeOnList[]) {
    setSelectedCoffees(updateList)
  }

  return (
    <CoffeeListContext.Provider
      value={{
        selectedCoffees,
        addCoffeeToList,
        updateCoffeeList,
      }}
    >
      {children}
    </CoffeeListContext.Provider>
  )
}

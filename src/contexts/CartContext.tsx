import { createContext, ReactNode, useState } from 'react'

interface CartItems {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
  quantity: number
}

interface CartContextType {
  items: CartItems[]
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItems[]>([])

  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  )
}

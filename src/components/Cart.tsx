import Link from 'next/link'
import { X } from 'phosphor-react'
import { CartContainer } from '../styles/components/cart'

export function Cart() {
  return (
    <CartContainer>
      <header>
        <h1>Sacola de compras</h1>
        <X size={24} />
      </header>

      <ul>
        <li>
          <img src="" alt="" />

          <div>
            <span>Camiseta Beyond the Limits</span>
            <strong>R$ 79,90</strong>

            <Link href="">Remover</Link>
          </div>
        </li>
      </ul>

      <footer>
        <ul>
          <li>
            <span>Quantidade</span>
            <strong>3 itens</strong>
          </li>
          <li>
            <span>Valor total</span>
            <strong>R$ 270,00</strong>
          </li>
        </ul>

        <button>Finalizar compra</button>
      </footer>
    </CartContainer>
  )
}

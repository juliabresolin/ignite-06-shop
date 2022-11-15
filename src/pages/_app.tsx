import { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/logo.svg'
import { CartProvider } from '../contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <button type="button">
            <div>1</div>
            <Handbag size={24} />
          </button>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>ignite shop | julia bresolin</title>
      </Head>

      <HomeContainer>
        <Product>
          <Image src={shirt1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 01</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product>
          <Image src={shirt1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 01</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  )
}

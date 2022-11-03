import Head from 'next/head'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.75,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>ignite shop | julia bresolin</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={shirt1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 01</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt2} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 01</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt3} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 01</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt3} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 01</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  )
}

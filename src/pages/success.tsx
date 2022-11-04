import Head from 'next/head'
import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <>
      <Head>
        <title>success | ignite shop | julia bresolin</title>
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer></ImageContainer>

        <p>
          Uhuul <strong>Diego Fernandes</strong>, sua
          <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

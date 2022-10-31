import Head from 'next/head'
import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$background',
  borderRadius: 4,
  border: 0,
  paddind: '4px 8px',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>ignite shop | julia bresolin</title>
      </Head>

      <main>
        <span>home works</span>
        <Button>button works</Button>
      </main>
    </>
  )
}

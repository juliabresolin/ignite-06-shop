import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return <span>product works: {JSON.stringify(query)}</span>
}

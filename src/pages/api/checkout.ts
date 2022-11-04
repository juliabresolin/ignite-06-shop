import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId } = req.body

  if (req.method !== 'POST') return res.status(405)

  if (!priceId) return res.status(400).json({ error: 'priceId not found!' })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.APP_NEXT_URL}/success`,
    cancel_url: `${process.env.APP_NEXT_URL}`,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}

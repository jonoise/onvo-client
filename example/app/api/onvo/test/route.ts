import { onvo } from '@/lib/onvo'

export const GET = async (req: Request) => {
  try {
    const c = await onvo.prices.create({
      currency: 'USD',
      isActive: true,
      productId: 'clwxgl8nx2mdzmhq3ciy8f876',
      type: 'one_time',
      unitAmount: 1000,
    })
    return Response.json({ c })
  } catch (error) {
    return Response.json({ message: 'Error from Onvo!' }, { status: 500 })
  }
}

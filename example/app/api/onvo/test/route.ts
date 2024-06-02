import { onvo } from '@/lib/onvo'

export const GET = async (req: Request) => {
  try {
    const c = await onvo.paymentMethods.verify('clwxcjjvf2n1taa4yvp9dp6ks')
    return Response.json({ c })
  } catch (error) {
    console.log('error', error)
    return Response.json({ message: 'Error from Onvo!' }, { status: 500 })
  }
}

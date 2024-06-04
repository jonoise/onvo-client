import { OnvoClient } from 'onvo-client'

export const onvo = new OnvoClient({ api_key: process.env.ONVO_API_KEY })

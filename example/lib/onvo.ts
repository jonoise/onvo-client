import { OnvoClient } from 'onvo-client/dist/client'

export const onvo = new OnvoClient({ api_key: process.env.TEST_API_KEY! })

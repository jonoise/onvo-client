import express from 'express'
import { onvo } from './lib/onvo.js'
import cors from 'cors'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send(
    `
    <p>Endpoints:</p>
    <ul>
      <li><a href="/customers">/customers</a></li>
      <li><a href="/customers/:id">/customers/:id</a></li>
      <li><a href="/customers">POST /customers</a></li>
    </ul>
    `
  )
})

app.get('/customers', async (req, res) => {
  const customers = await onvo.customers.list()

  res.json(customers)
})

app.get('/customers/:id', async (req, res) => {
  const { id } = req.params

  try {
    const customer = await onvo.customers.get(id)
    return res.json(customer)
  } catch (error) {
    return res
      .status(404)
      .json({ message: 'Hubo un error al buscar este cliente.' })
  }
})

app.post('/customers', async (req, res) => {
  const customer = req.body
  const newCustomer = await onvo.customers.create(customer)
  return res.json(newCustomer)
})

app.listen(4848, () => {
  console.log('Server en el 4848! click -> http://localhost:4848/')
})

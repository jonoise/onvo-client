# Onvo Client

Onvo Client es un cliente de HTTP orientado a objetos para **Node.js** escrito en Typescript para interactuar de forma fácil con la [API de Onvo](https://docs.onvopay.com).

## Installation

### npm

```bash
npm install onvo-client
```

### yarn

```bash
yarn add onvo-client
```

### Usage

La librería está diseñada para ser usada en un entorno de servidor, no incluya esta librería en el frontend de su aplicación ya que expondría su clave secreta.
La clave secreta deber ser guardada en una variable de entorno.

#### Create client and export it

@lib/onvo.ts

```typescript
import { OnvoClient } from 'onvo-client'

export const onvo = new OnvoClient({ api_key: 'YOUR_SECRET_KEY' })
```

#### Use the client in your endpoints

@routes/onvo/customers.ts

```js
import { onvo } from '../lib/onvo'

export const getCustomer = async (id) => {
  try {
    const customer = await onvo.customers.get(id)
    return customer
  } catch (error) {
    return error
  }
}
```

## Resources

Todos los recursos disponibles en la API de Onvo están disponibles como métodos en el cliente excepto el recurso bajo el path `shoppers`. Entre ellos

- `customers`
- `checkouts`
- `payment-intents`
- `payments-methods`
- `products`
- `prices`
- `subscriptions`
- `refunds`
- `shipping-rates`

Para más información sobre los métodos disponibles en cada recurso, puedes consultar la [documentación oficial de Onvo](https://docs.onvopay.com).

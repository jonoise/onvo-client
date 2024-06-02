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

```typescript
// @lib/onvo.ts
import { OnvoClient } from 'onvo-client'

export const onvo = new OnvoClient({ api_key: 'YOUR_SECRET_KEY' })

// @my-api-endpoint.ts
import { onvo } from '@lib/onvo'

const customers = await onvo.customers.list()
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

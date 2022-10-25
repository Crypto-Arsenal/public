---
sidebar_position: 2
sidebar_label: place_order
hide_title: false
---

import { Highlight } from "../../../../../src/components/Highlight.js";

# place_order

<Highlight color="#ffba00"> This function can only be used in trade() or on_tradingview_signal(). </Highlight>

To put an order. Each period can put at max 500# orders.

## Input

```typescript
exchange: string;
pair: string;
action: "buy" | "sell" | "open_long" | "open_short" | "close_long" | "close_short";
limit: number;
amount: number;
percent: number;
client_order_id: string;
profit: number;
loss: string;
conditional_order_type: "OTO";
child_conditional_orders: Input[];
notional: number;
```

### limit (optional)

set `limit` to place a LIMIT order.

### amount (optional)

quantity based on a fixed quantity. if neither of quantity, percent and notional is set, use `percent:100`. Quantity has higher priority than percent.

### percent (optional)

quantity based on a percentage of total balance. if neither of quantity, percent and notional is set, use `percent:100`. Quantity has higher priority than percent.

### client_order_id (optional)

place / cancel an order with `client_order_id`.

### profit (optional)

<Highlight color="#ffba00"> Live Trade </Highlight>

when the order has been filled, place a TAKE_PROFIT order with stop price `profit`.

### loss (optional)

<Highlight color="#ffba00"> Live Trade </Highlight>

when the order has been filled, place a STOP_LOSS order with stop price `loss`.

### conditional_order_type (optional)

place a conditional order with the `conditional_order_type`.

### child_conditional_orders (optional)

place a conditional order with the following types:

#### OTO (One-Triggers-the-Other order)

an OTO order consists of a primary order and a child order.
the child order will be placed only if the primary order is fully filled ([Order.status](/docs/developer/api/python/ca-objects/order) becomes [OrderStatus.FILLED](/docs/developer/api/python/ca-objects/order-status)).

#### OCO (One-Cancels-the-Other order)

<Highlight color="#ffba00"> In Progress </Highlight>

an OCO order consists of two child orders.
when one of them is fully filled ([Order.status](/docs/developer/api/python/ca-objects/order) becomes [OrderStatus.FILLED](/docs/developer/api/python/ca-objects/order-status)), the other will be canceled automatically.

### notional (optional)

<Highlight color="#ffba00"> buy, open_long, open_short </Highlight>

quantity based on a notional value to. if neither of quantity, percent and notional is set, use `percent:100`. Quantity has higher priority than percent.

## Example

### A buy market order to buy with 100% of total balance

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='buy')
```

### A buy limit order to buy with 100% of total balance

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='buy', limit=1234)
```

### A buy market order to buy 0.1 size/contract

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='buy', amount=0.1)
```

### A buy limit order to buy 0.1 size/contract

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='buy', limit=1234, amount=0.1)
```

### A buy market order to buy with 50% of total balance

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='buy', percent=50)
```

### A buy limit order to buy with 50% of total balance

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='buy', limit=1234, percent=50)
```

### A buy market order to buy with 100 USDT

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='buy', notional=100)
```

### An OTO order to close long, and open short after close-long order is fully filled

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='close_long', conditional_order_type='OTO', child_conditional_orders=[{
    'action': 'open_short'
}])
```

### An OTO order to close short, and open long after close-short order is fully filled

```python
exchange, pair, base, quote = CA.get_exchange_pair()
CA.place_order(exchange, pair, action='close_short', conditional_order_type='OTO', child_conditional_orders=[{
    'action': 'open_long'
}])
```
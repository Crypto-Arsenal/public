---
sidebar_position: 1
sidebar_label: Strategy Class
hide_title: false
---

import { Highlight } from "../../../../src/components/Highlight.js";

# Strategy Class

```py
class Strategy(StrategyBase):
    def __init__(self):
        # strategy attributes
        self.period = 60 * 60
        self.subscribed_books = {}
        self.options = {}
        # define your attributes here
        pass
    def on_tradingview_signal(self, signal, candles):
        CA.log('on_tradingview_signal: ' + str(signal))
        exchange, pair, base, quote = CA.get_exchange_pair()
        action = signal.get('action')
        if action == 'cancelAll' or action == 'cancel_all':
            CA.cancel_all()
        else:
            CA.place_order(exchange, pair, action, signal.get('limit'), signal.get('fixed'), signal.get('percent'), signal.get('clientOrderId'))
        CA.log(signal.get('log'))
    def on_order_state_change(self,  order):
        CA.log('exchange: ' + str(order.exchange) + ', pair: ' + str(order.pair) + ', type: ' + str(order.type) +
               ', status: ' + str(order.status) + ', price: ' + str(order.price) +
               ', amount: ' + str(order.amount) + ', amount_filled: ' + str(order.amount_filled))
    def trade(self, candles):
        exchange, pair, base, quote = CA.get_exchange_pair()
        close_price = candles[exchange][pair][0]['close']
```

## `trade`

<Highlight color="#ffba00">
  Must-Have
</Highlight>

`trade()` will be called at the end of each candle.

### Input

```py
candles: dictionary
```

candle is K bar information with open, high, low, close, volume and time as belows.

```python
candles[exchange][pair][0]['open']
candles[exchange][pair][0]['high']
candles[exchange][pair][0]['low']
candles[exchange][pair][0]['close']
candles[exchange][pair][0]['volume']
candles[exchange][pair][0]['time']
```

## `on_order_state_change`

<Highlight color="#ffba00">
  Must-Have
</Highlight>

`on_order_state_change()` will be called when an order is updated.

### Input

```py
order: Order
```
> Check [`Order`](/docs/developer/api/python/ca-objects/order)

## `on_tradingview_signal`

`on_tradingview_signal()` will be called when receving an update from TradingView. For more information please refer to [Help - TradingView](https://help.crypto-arsenal.io/en/collections/3568192-tradingview).

### Input

```py
signal: JSON
candles: dictionary
```

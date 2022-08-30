---
sidebar_position: 1
sidebar_label: Hello World
hide_title: false
---

import { Highlight } from "../../../../src/components/Highlight.js";

# "Hello World"

```py
class Strategy(StrategyBase):
    def __init__(self):
        # strategy attributes
        self.period = 60 * 60
        self.subscribed_books = {}
        self.options = {}

        # define your attributes here
        pass

    def on_order_state_change(self,  order):
        pass

    def trade(self, candles):
        exchange, pair, base, quote = CA.get_exchange_pair()
        close_price = candles[exchange][pair][0]['close']
        CA.log('Hello world! Current price is {}'.format(close_price))
```

Lets start from this Python 3 example. We first declare a class `Strategy` which extends from the systm built-in class `StrategyBase`.

In the `Strategy` constructor, `__init__(self)`, we initialize `period`, `subscribed_books`, and `options` attributes:

- `period`: How frequent your strategy recieves candle data and execute `trade()`. This determines the candle size i.e 1 minute, 1 hour, or 1 day. **The period cannot not be changed once initialized. The smallest period is 60 second**
- `subscribed_books`: No need to change for single pair strategy. If developing multiple pairs strategy, set up exchange and pairs here (Not suppported yet).
- `options`: **No need to initialize here.** 

`Strategy` class should implement the belows 2 methods.
- `on_order_state_change(self, order)`: When the order status has changed, the system would pass `order: Order` in this callback method.
- `trade(self, candles)`: During each period, system would pass the latest price and volume data `candles: Candle[]` in this callback method.

In this example, we use a CA library method `CA.get_exchange_pair()` to get the name of exchange, pair, base, and quote. By using exchange and pair to get the latest `close` price from candles.

`candles[exchange][pair]` returs an candles array. The array has data sorted from the latest to the oldest with at most 500 records data. The K bar includes the below fields.

```
    open
    high 
    low
    close
    volume
    time
```

We can also use `CA.log()` to print out the string `'Hello world! Current price is {}'.format(close_price)`. After backtesting, the logged messages would be shown in the records. 

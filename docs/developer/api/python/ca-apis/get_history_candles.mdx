---
sidebar_position: 10
sidebar_label: get_history_candles
hide_title: false
---

import { Highlight } from "../../../../../src/components/Highlight.js";

# get_history_candles
To get history candles in `__init__` function with past `length` of `period` data, which is useful for strategy to calculate parameter (ex. MA) without waiting several periods of `trade()` for collecting data.
CA.get_history_candles can only be used in `__init__`, so it is necessary to save the history candles once queried.

## Input

```typescript
  length: number;
  period: number;
  is_reverse: boolean = False;
```

## Return

```typescript
  error: string;
  candles: dictionary;
```

## Example

### get candles in chronological order
```python
def __init__(self):
    self.period = 60 * 60 # 1 hour
    self.subscribed_books = {}
    self.options = {}
    # query the past 1 day data
    self.history_candles = CA.get_history_candles(24, self.period)
    if self.history_candles:
        CA.log(str(self.history_candles))
        for exchange in self.history_candles:
            for pair in self.history_candles[exchange]:
                for candle in self.history_candles[exchange][pair]:
                    CA.log(str(candle))
```

### get candles in reverse chronological order
```python
def __init__(self):
    self.period = 60 * 60 # 1 hour
    self.subscribed_books = {}
    self.options = {}
    # query the past 1 day data
    self.history_candles = CA.get_history_candles(24, self.period, True)
    if self.history_candles:
        CA.log(str(self.history_candles))
        for exchange in self.history_candles:
            for pair in self.history_candles[exchange]:
                for candle in self.history_candles[exchange][pair]:
                    CA.log(str(candle))
```
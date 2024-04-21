import Image from '@theme/IdealImage';

# Common Trading Bot Error

Report an error

When reporting an error, please go to the Portfolio and check the robot ID, and provide your email.

<Image img={require('/img/trader/trading_error.png')} />

Below are common strategy error messages and their causes.

AuthenticationError: Invalid API key, IP, or permissions for the action

This error indicates that there is an error in your exchange API configuration. Please check here to ensure that you have provided the correct permissions. Once you have set it up correctly, the next action should not result in an error.

Error: amount 0 should be greater than 0.001

Possible explanation:

Before following the trades, the quantitative strategy has already opened a position. When the closing signal comes, we do not have any position to close, resulting in the error message 'Quantity cannot be zero.' This error does not require any action; you just need to wait for the next trade to be executed by the quantitative strategy.

ExchangeError: Order's position side does not match user's setting

This error indicates that there is an error in your exchange settings. Please check here for verification.

When the robot is activated, it uses the API to set the correct configurations on the exchange:

1. Position mode should be set to dual (both long and short positions).
2. The margin mode for the trading pair should be set to isolated margin.
3. The leverage multiplier for the trading pair should be set according to the strategy developer's specified value.

Currently, we are aware that if there are existing positions and the leverage is adjusted, the exchange may return an error. If the setting fails, it will result in this error.

InvalidOrder: ReduceOnly Order is rejected
Got error while sending order to exchange. InvalidOrder: binance `{"code":-2022,"msg":"ReduceOnly Order is rejected."}`

https://dev.binance.vision/t/why-do-you-get-reduceonly-rejection-errors/1198

A:
Several reasons you might want to check for reduceOnly order rejection:

You don’t have any position to close

You’re at the edge of liquidation

You have other open orders that would be filled before the failed one and close all positions

A little bit explanation for #3 -

Let’s say your current position is 1 BTC for short; And you have an open order to close this BTC at 10000; If you place another order to close 1 BTC at 9999, it’d be rejected. (Because the order with 10000 for sure would be filled and close everything before this “9999” order )

If you still think you shouldn’t have been rejected after checking above things, please contact CS

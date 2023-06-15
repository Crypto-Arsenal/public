import Image from '@theme/IdealImage';

# Common Trading Bot Error

回報錯誤
 

再給我們回報錯誤時 可以先去 Portfolio 看一下機器人 ID 並且提供你的 email

 <Image img={require('/img/trader/trading_error.png')} />
 

以下是常見策略錯誤訊息及原因
 

 

AuthenticationError: Invalid API key, IP, or permissions for the action

這個錯誤代表你的交易所API設定有錯誤 看這邊去確認 有給到對的權限 設置完後下一個動作就應該不會出錯

 

 

Error: amount 0 should be greater than 0.001

可能是

在跟單之前 量化策略已經開倉了 在平倉訊號來的時候 我們不會有倉位可以去平 所以錯誤說 『數量不行是0』 - 這個錯誤不用做任合事 只需要等下次量化策略開單即可

 

ExchangeError: Order's position side does not match user's setting

這個錯誤代表你的交易所設定有錯誤 看這邊去確認

 

機器人啟動時會用api去交易所設定正確的設定：
1.  倉位模式為雙向模式
2. 該交易對的保證金模式為逐倉
3. 該交易對的槓桿倍數為策略開發者指定的倍數

目前我們知道如果有其他倉位時調整槓桿，交易所可能回傳錯誤 然後設置失敗就會導致次錯誤

 

InvalidOrder: ReduceOnly Order is rejected
Got error while sending order to exchange. InvalidOrder: binance {"code":-2022,"msg":"ReduceOnly Order is rejected."}

 

https://dev.binance.vision/t/why-do-you-get-reduceonly-rejection-errors/1198

 

A:
Several reasons you might want to check for reduceOnly order rejection:

You don’t have any position to close

You’re at the edge of liquidation

You have other open orders that would be filled before the failed one and close all positions

A little bit explanation for #3 -

Let’s say your current position is 1 BTC for short; And you have an open order to close this BTC at 10000; If you place another order to close 1 BTC at 9999, it’d be rejected. (Because the order with 10000 for sure would be filled and close everything before this “9999” order )

If you still think you shouldn’t have been rejected after checking above things, please contact CS

 
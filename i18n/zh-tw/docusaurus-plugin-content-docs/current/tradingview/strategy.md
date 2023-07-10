import Image from '@theme/IdealImage';

# Automate TradingView Strategy

### TL;DR

#### 🔥 [<u>Example TradingView PineScript Strategy here</u>](https://www.tradingview.com/script/TCsd7tB4-Strategy-Alert-Webhook-Demo-Buy-One-Sell-One/)

⚠️ Note that this only works if the strategy is created with **TradingView & API** template that implements ```on_tradingview_signal``` which uses our [<u>Python library</u>](https://docs.crypto-arsenal.io/docs/developer/get-started/python/hello-world) to place orders based on the received signal (see below)

<Image img={require('/img/developer/tradingview/strategy/flow.png')} />

### Step 1: Create TradingView Strategy on the [<u>Strategy page</u>](https://crypto-arsenal.io/strategies/)

<Image img={require('/img/developer/tradingview/strategy/strategy.png')} />

<Image img={require('/img/developer/tradingview/strategy/create.png')} />

### Step 2: Here are the default messages for SPOT (can change to USDⓈ-M Futures)

<Image img={require('/img/developer/tradingview/strategy/spot.png')} />

### Step 2.1 (optional): Change the Strategy Type and Pair (default is SPOT)

<Image img={require('/img/developer/tradingview/strategy/type.png')} />

### Step 3: Generate the corresponding messages by configuring ```Order Type```, ```Qty Type``` and ```Client Order ID```

👉 [*<u>See detailed API spec here</u>*](https://help.crypto-arsenal.io/en/articles/6510420-api-trading) 👀

- **Order Type**: ```MARKET``` | ```LIMIT```, default to ```MARKET```

- **Qty Type**: ```Percent``` | ```Fixed```; default to ```100 Percent```

- **Client Order ID**: Client order ID to uniquely identify order; default to ```{{strategy.order.id}}```

<Image img={require('/img/developer/tradingview/strategy/order_type.png')} />

<br></br>

- **TP/SL**: Prices for Take Profit and Stop Loss orders - only available for opening position in ***USDⓈ-M*** Futures

### Step 4: Copy and paste these messages to your Pinescript

- Webhook URL: ```https://api.crypto-arsenal.io/trading-signal/webhook```

### Step 5: Use the message in Pinescript with ```alert``` call or ```alert_message``` on order fill events

#### 👉 [<u>Example TradingView Strategy here</u>](https://www.tradingview.com/script/TCsd7tB4-Strategy-Alert-Webhook-Demo-Buy-One-Sell-One/) 📝

1. Manually trigger [<u>```alert```</u>](https://www.tradingview.com/pine-script-docs/en/v5/concepts/Alerts.html?highlight=alert#using-selective-alert-calls) calls i.e ```alert("message")```
2. Trigger alerts on **order fill events** with [<u>```alert_message```</u>](https://www.tradingview.com/pine-script-docs/en/v5/concepts/Alerts.html?highlight=alert#order-fill-events) on [<u>```strategy.close()```</u>](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy%7Bdot%7Dclose), [<u>```strategy.entry()```</u>](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy%7Bdot%7Dentry), [<u>```strategy.exit()```</u>](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy%7Bdot%7Dexit) and [<u>```strategy.order()```</u>](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy%7Bdot%7Dorder)

    a. ⚠️ Need to fill the Alert Creation box with ```{{strategy.order.alert_message}}```
    <Image img={require('/img/developer/tradingview/strategy/alert_box.png')} />

💡 **Strategy [<u>*placeholder*</u>](https://www.tradingview.com/pine-script-docs/en/v5/concepts/Alerts.html?highlight=alert#placeholders) i.e *```{{close}}```* wouldn't work in these strategy alert calls, you need to use variables in your strategies like**

💡 **{{ }} placeholder 在pinescript 裡不會有值 需要用 + " " +**

- MA Example

    - ```alert_message = "Stop-buy executed (stop was " + str.tostring(high) + ")"```

- Stop loss and Take Profit Example

    - 
    ```jsx
    alert('{"action":"openLong", "percent":"100","profit":"' + 
    str.tostring(strategy.position_avg_price * (1 + 0.1)) + 
    '","loss":"' + str.tostring(strategy.position_avg_price * (1 - 0.1)) + '"}')
    ```

### Step 6: Create an alert on the strategy on TradingView

<Image img={require('/img/developer/tradingview/strategy/alert.png')} />

<br></br>

Remember to fill the message with ```{{strategy.order.alert_message}}``` if alerts are triggered with **order fill events**

<Image img={require('/img/developer/tradingview/strategy/alert_box.png')} />

### Step 7: 

- You will now go back to the Crypto Arsenal page and head to **Record** and launch a **Simulation** to test-drive before launching your bot for live trade.

<Image img={require('/img/developer/tradingview/strategy/record.png')} />

<br></br>

<Image img={require('/img/developer/tradingview/strategy/simulate.png')} />

### Step 8: 

- Once the TradingView alert triggers, you can see the buy entry on the chart along with stats and logs on the side

<Image img={require('/img/developer/tradingview/strategy/record_performance.png')} />

<br></br>

<Image img={require('/img/developer/tradingview/strategy/buy.png')} />

### If you want custom action or logic...

- You can customize with Python in the Editor by updating the ```def on_tradingview_signal(self, signal, candles):``` callback 

<Image img={require('/img/developer/tradingview/strategy/editor.png')} />

### If you have an Indicator...

- See this article [<u>https://help.crypto-arsenal.io/en/articles/6418859-autumate-tradingview-indicator</u>](https://help.crypto-arsenal.io/en/articles/6418859-autumate-tradingview-indicator)

- Or this article for API Trading [<u>https://help.crypto-arsenal.io/en/articles/6510420-api-trading</u>](https://help.crypto-arsenal.io/en/articles/6510420-api-trading)


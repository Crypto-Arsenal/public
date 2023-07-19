import Image from '@theme/IdealImage';

# API Trading

### TL;DR

### [🔥<u>_Python Demo Script_</u>](https://colab.research.google.com/drive/1Patm1mcPO3st5xTk2d2eQxBN6GTOt5z7?usp=sharing)

⚠️ Note that this only works if the strategy is created with **TradingView & API**
template that implements `on_tradingview_signal` which uses our [<u>Python library</u>](https://docs.crypto-arsenal.io/docs/developer/get-started/python/hello-world) to place orders based on the received signal (see below)

<!-- <Image img={require("/img/developer/tradingview/api-trading/flow.png")} /> -->
<!-- <Image img={require('/img/developer/tradingview/api-trading/usdm.png')} /> -->

<Image img={require('/img/developer/tradingview/api-trading/flow.png')} />

### POST API endpoint

Post JSON message to `https://api.crypto-arsenal.io/trading-signal/webhook`

### Example Python Script

```
import requests

# you can copy URL and PAYLOAD straight from the webhook messages box on the platform (see below)
URL = 'https://crypto-arsenal.io/trading-signal/webhook'
PAYLOAD ={"log":"Buy","action":"buy","percent":"100","connectorName":"YOUR_CONNECTOR","connectorToken":"YOUR_TOKEN"}

# ⚠️ start a simulation/live trade to see trades in real time
response = requests.post(URL, json=PAYLOAD)
print(response.text) # ok
```

### Place Order JSON Spec:

🔥 **_JSON messages can be generated automatically and copied via the UI - the process is similar to [<u>connecting to TradingView</u>](https://help.crypto-arsenal.io/en/articles/6456240-automate-tradingview-strategy) (follow up to Step 4)_**

### Step 1: Lets' make sure the mode is QUANT

<Image img={require('/img/developer/tradingview/api-trading/quant.png')} />

### Step 2: Navigate to [<u>Strategy</u>](https://crypto-arsenal.io/strategies) and Create a TradingView Strategy

<Image img={require('/img/developer/tradingview/api-trading/strategy.png')} />

### Step 3: Pick USDT Future and your currency

<Image img={require('/img/developer/tradingview/api-trading/usdm.png')} />

### Step 4: Copy Webhook URL & Message to TradingView Alert Box

<Image img={require('/img/developer/tradingview/api-trading/message.png')} />

<br></br>

<Image img={require('/img/developer/tradingview/api-trading/webhook.png')} />

<br></br>

| Name               | Type   | Mandatory | Description                   |
| ------------------ | ------ | --------- | ----------------------------- |
| connectorName      | STRING | YES       |
| connectorToken     | STRING | YES       |
| action             | STRING | YES       | For USDⓈ-M Futures, used with openLong, closeLong, openShort, or closeShort.<br></br><br></br>For SPOT, used with buy or sell.<br></br><br></br>For both, cancel action will cancel by client order ID (clientOrderId will be a required field)<br></br><br></br>For both, cancellAll will cancel all orders.
| fixed              | STRING | NO        | Amount to place an order with.<br></br><br></br>⚠️ **```fixed```** will take precedence over percent if both are **```present```**.
| percent            | STRING | NO        | Percentage of the available base asset to place an order with. E.g. ```"90"``` will be ```90%``` of the base asset. ⚠️ **```fixed```** will take precedence if both are present.
| limit              | STRING | NO        | **LIMIT** price of the order.<br></br><br></br>⚠️ If it is not sent, will place an order by **MARKET** price by default
| profit             | STRING | NO        | Price for the take profit order<br></br><br></br>⚠️ Only for ***USDⓈ-M Futures*** actions
| loss               | STRING | NO        | Price for the stop loss order<br></br><br></br>⚠️ Only for ***USDⓈ-M Futures*** actions
| log                | STRING | NO        | Message to print in the log
| clientOrderId      | STRING | NO        | Client Order Id to **```place```** or **```cancel```** orders.<br></br><br></br>⚠️  **```cancel```** will cancel by this ```clientOrderId```. 
| delaySeconds       | NUMBER | NO        | Delay this order by seconds
| delaySecondsFilter | STRING | NO        | Only delay this order by seconds if the ```log``` contain this filter word
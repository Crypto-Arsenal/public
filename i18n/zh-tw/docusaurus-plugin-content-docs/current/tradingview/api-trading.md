import Image from '@theme/IdealImage';

# API Trading

### TL;DR

### [🔥<u>_Python Demo Script_</u>](https://colab.research.google.com/drive/1Patm1mcPO3st5xTk2d2eQxBN6GTOt5z7?usp=sharing)

⚠️ 注意，這僅適用於使用**TradingView ＆ API**模板創建的策略。該模板應實現`on_tradingview_signal`函數，該函數使用我們的[<u>Python庫<u/>](https://docs.crypto-arsenal.io/docs/developer/get-started/python/hello-world）根據接收到的信號下訂單。請參考下面的示例。

<Image img={require('/img/developer/tradingview/api-trading/flow.png')} />

### POST API 端點

發送 JSON 訊息至 `https://api.crypto-arsenal.io/trading-signal/webhook`

### Python 腳本範例

```
import requests

# 您可以直接從平台上的 Webhook 訊息方塊中複製 URL 和 PAYLOAD（參見下方）
URL = 'https://crypto-arsenal.io/trading-signal/webhook'
PAYLOAD ={"log":"Buy","action":"buy","percent":"100","connectorName":"YOUR_CONNECTOR","connectorToken":"YOUR_TOKEN"}

# ⚠️ 開始進行模擬/實盤交易以即時查看交易
response = requests.post(URL, json=PAYLOAD)
print(response.text) # ok
```

### 下單 JSON 規格:

🔥 **_JSON messages can be generated automatically and copied via the UI - the process is similar to [<u>connecting to TradingView</u>](https://help.crypto-arsenal.io/en/articles/6456240-automate-tradingview-strategy) (follow up to Step 4)_**

🔥 **_JSON 訊息可以透過使用者介面自動生成並複製 - 此過程類似於[<u>連接到 TradingView</u>](https://help.crypto-arsenal.io/en/articles/6456240-automate-tradingview-strategy) (按照第 4 步進行)的步驟_**

### 步驟 1：確保模式設置為 QUANT（量化模式）

<Image img={require('/img/developer/tradingview/api-trading/quant.png')} />

### 步驟 2：前往[<u>策略</u>](https://crypto-arsenal.io/strategies)並創建一個 TradingView 策略

<Image img={require('/img/developer/tradingview/api-trading/strategy.png')} />

### 步驟 3：選擇 USDT 期貨和您的貨幣

<Image img={require('/img/developer/tradingview/api-trading/usdm.png')} />

### 步驟 4：將 Webhook URL 和訊息複製到 TradingView 的警示框中

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
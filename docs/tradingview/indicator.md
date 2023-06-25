import Image from '@theme/IdealImage';

# Autumate TradingView Indicator

Before reading this article, ensure you have your toggle box on the top right to "investor" to reduce confusion, as shown below. 

<Image img={require('/img/developer/tradingview/indicator/investor.png')} />

<br></br>

Also, make sure you have a favorited indicator that you want to trade. Steps on how to add indicators to your Chart + you can follow this help [<u>article</u>](https://www.tradingview.com/support/solutions/43000555216-i-want-to-add-an-indicator-strategy-published-by-another-user-to-my-chart/#:~:text=To%20open%20the%20list%20of,Protected%20indicators%20with%20no%20restrictions.) by TradingView 

Step 1: 

- Log in to the Crypto Arsenal webpage and click on the "♞" on the left-hand side of the page. This will take you to the [<u>strategy</u>](https://crypto-arsenal.io/strategies) page.

Destination:

<Image img={require('/img/developer/tradingview/indicator/crypto_strategy.png')} />

<br></br>

Step 2: 

- You will click on the **New Strategy** button on this page, and TradingView should already be selected. Just click on the **Create** button, and a new box will open up that looks like this:

<Image img={require('/img/developer/tradingview/indicator/new_strategy.png')} />

<br></br>

<Image img={require('/img/developer/tradingview/indicator/strategy_flow.png')} />

<br></br>

<Image img={require('/img/developer/tradingview/indicator/tradingview.png')} />

<br></br>

Step 3: 

- Keep the Crypto Arsenal page open and go to your TradingView Chart + page: **Home** > **Product** > **Chart** +.

Destination:

<Image img={require('/img/developer/tradingview/indicator/destination.png')} />

<br></br>

Step 4: 

- Click on the **indicators** button on the top menu bar. Here you will find your favorite indicators published by the TradingView Community. We will show you how to create an alert using an RSI Strategy for this example.

Destination:

<Image img={require('/img/developer/tradingview/indicator/indicators.png')} />

<br></br>

Step 6: 

- Click on the **Alert** button on the top menu bar. Trigger the alert when RSI is above 70. Fill Webhook URL with `https://api.crypto-arsenal.io/trading-signal/webhook.` Tell Crypto Arsenal to sell via the **Sell All** webhook message. Repeat the same steps for **Buy All**. 

    - If you have an Indicator script, then you can still leverage the [<u>placeholder</u>](https://www.tradingview.com/pine-script-docs/en/v5/concepts/Alerts.html?highlight=alert#placeholders) with [<u>`alertcondition`</u>](https://www.tradingview.com/pine-script-docs/en/v5/concepts/Alerts.html?highlight=alert#alertcondition-events) (the message will be const string therefore the same for every bar)

- [***<u>See detailed API parameters here</u>***](https://help.crypto-arsenal.io/en/articles/6510420-api-trading)

Destination:

<Image img={require('/img/developer/tradingview/indicator/alert.png')} />

<br></br>

Step 7: 

- You will now go back to the Crypto Arsenal page and head to **Record** and launch a **Simulation** to test-drive before launching your bot for live trade.

<Image img={require('/img/developer/tradingview/indicator/record.png')} />

<br></br>

<Image img={require('/img/developer/tradingview/indicator/simulate.png')} />

<br></br>

Step 8: 

- Once the TradingView alert triggers, you can see the buy entry on the chart along with stats and logs on the side

<!-- <Image img={require('/img/developer/tradingview/indicator/record_performance.png')} /> -->

<Image img={require('/img/developer/tradingview/indicator/buy.png')} />

### If you want custom action or logic...

- You can customize with Python in the Editor by updating the ```def on_tradingview_signal(self, signal, candles):``` callback 

<Image img={require('/img/developer/tradingview/indicator/editor.png')} />

<br></br>

### If you have a strategy...

- See this article [<u>https://help.crypto-arsenal.io/en/articles/6456240-automate-tradingview-strategy</u>](https://help.crypto-arsenal.io/en/articles/6456240-automate-tradingview-strategy)

- Or this article for API Trading [<u>https://help.crypto-arsenal.io/en/articles/6510420-api-trading</u>](https://help.crypto-arsenal.io/en/articles/6510420-api-trading)




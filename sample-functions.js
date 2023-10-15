function mySum(a, b) {
  return a + b;
}

class Stock {
  constructor(symbol, quantity) {
    this.symbol = symbol;
    this.quantity = quantity;
  }

}

class ShareSaleException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ShareSaleException';
  }
}

class Portfolio{
  constructor(name) {
    this.name = name;
    this.stocks = [];
  }

  addStock(stock) {
    if (stock instanceof Stock) {
      this.stocks.push(stock);
    } else {
      console.log("Invalid stock object. Please provide a valid Stock instance.");
    }
  }

  isEmpty() {
    return this.stocks.length === 0
  }

  getUniqueTickerCount() {
    const uniqueTickers = new Set();
    for (const stock of this.stocks) {
      uniqueTickers.add(stock.symbol);
    }
    return uniqueTickers.size;
  }

  purchase(symbol, quantity) {
    const existingStock = this.stocks.find((stock) => stock.symbol === symbol);

    if (existingStock) {
      existingStock.quantity += quantity;
    } else {
      const newStock = new Stock(symbol, quantity);
      this.addStock(newStock);
    }
  }

  sell(symbol, quantity) {
    const existingStock = this.stocks.find((stock) => stock.symbol === symbol);

    if (existingStock) {
      if (existingStock.quantity >= quantity) {
        existingStock.quantity -= quantity;
        if (existingStock.quantity === 0) {
          // Remove the stock if the quantity becomes zero
          this.stocks = this.stocks.filter((stock) => stock.symbol !== symbol);
        }
      } else {
        throw new ShareSaleException("Not enough shares to sell.");
      }
    } else {
      throw new ShareSaleException("Stock not found in the portfolio.");
    }
  }

  shares(symbol) {
    const existingStock = this.stocks.find((stock) => stock.symbol === symbol);

    if (existingStock) {
      return existingStock.quantity;
    }
    else {
      console.log("Stock not found in the portfolio.");
    }
  }


}
 



export default { mySum, Portfolio, Stock, ShareSaleException };

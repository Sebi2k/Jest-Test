import myFunctions from "./sample-functions";

test("Testing mySum -- success", () => {
  const expected = 30;
  const result = myFunctions.mySum(12, 18);
  expect(expected).toBe(result);
});

test('Testing portfolio', () => {
  const e1 = new myFunctions.Stock("G", 1);

  const p = new myFunctions.Portfolio("me");
  p.addStock(e1);
  expect(e1).toBe(p.stocks[0]);

});

test('Testing portfolio isEmpty', () => {
  const p = new myFunctions.Portfolio("me");
  expect(p.isEmpty()).toBe(true);
});

test('Testing portfolio ticker', () => {
  const e = new myFunctions.Stock("G", 1);
  const e1 = new myFunctions.Stock("R", 1);
  const e2 = new myFunctions.Stock("G", 1);

  const p = new myFunctions.Portfolio("me");
  p.addStock(e);
  p.addStock(e1);
  p.addStock(e2);

  expect(p.getUniqueTickerCount()).toBe(2);
});

test('Testing portfolio purchase', () => {
  const p = new myFunctions.Portfolio("me");
  p.purchase("google", 3);
  p.purchase("google", 1);

  const s = "google";
  const q = 4;
  expect(p.stocks[0].symbol).toBe("google");
  expect(p.stocks[0].quantity).toBe(4);

});

test('test for sell', () => {
  const p = new myFunctions.Portfolio("me");
  p.purchase("google", 3);
  p.purchase("g", 2);
  p.sell("google", 2)
  p.sell("g", 1)

  expect(p.stocks[0].quantity).toBe(1);
  expect(p.stocks[1].quantity).toBe(1);
})

test('Testing portfolio shares', () => {
  const p = new myFunctions.Portfolio("me");
  p.purchase("google", 3);
  p.purchase("google", 1);

  expect(p.shares("google")).toBe(4);
});

test('Testing portfolio del', () => {
  const p = new myFunctions.Portfolio("me");
  p.purchase("google", 3);
  p.purchase("google", 1);
  p.sell("google", 4)
  expect(String(p.stocks)).toBe('');
});

test('Testing portfolio too many', () => {
  const myPortfolio = new myFunctions.Portfolio("My Portfolio");
  myPortfolio.purchase("GME", 5);

  try {
    myPortfolio.sell("GME", 10);
  } catch (error) {
    if (error instanceof myFunctions.ShareSaleException) {
      console.log("Error:", error.message);
    } else {
      console.log("An unexpected error occurred.");
    }
  }
});

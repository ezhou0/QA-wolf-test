const { chromium } = require("playwright");


(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  // YOUR CODE STARTS
  const page = await browser.newPage();
  await page.goto('https://www.netflix.com/login');
  await page.fill('input[name="userLoginId"]', 'user');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('.inputError');
  await page.close();
  // YOUR CODE ENDS
})();

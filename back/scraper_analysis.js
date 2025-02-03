const puppeteer = require('puppeteer')
const Sentiment = require('sentiment')
const sentiment = new Sentiment()

const SentimentData = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('https://mojpregled.onrender.com/')
  const text = await page.$eval("*", (el) => el.innerText)
  const result = sentiment.analyze(text)
  console.log(result)
  await browser.close()
  console.log('this is the end within the func')
}

SentimentData()

console.log('this is the end outside the func')
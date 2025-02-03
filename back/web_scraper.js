const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
const port = 8000
app.listen(port, () => console.log(`server running on port ${port}`))

const url = 'https://www.theguardian.com'
axios(url).then(response => {
  const html = response.data
  const $ = cheerio.load(html)
  const articles = []
  $('.fc-item__title', html).each(function () {
    const title = $(this).text()
    const url = $(this).find('a').attr('href')
    articles.push({
      title,
      url
    })
  })
  console.log(articles)
}).catch(err => console.log(err))


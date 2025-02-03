const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

// const app = express()
// const port = 8000
// app.listen(port, () => console.log(`server running on port ${port}`))

const url = 'https://grid.mk/'
axios(url).then(response => {
  const html = response.data
  const $ = cheerio.load(html)
  const articles = []
  $('section', html)
    .find('.post')
    .each(function () {
      const title = $(this).find('.post-title').eq(0).text()
      console.log(title)
      const source = $(this).find('.post-source').text()
      console.log(source)
      articles.push({
        title,
        source
      })
    })
  console.log(articles)
}).catch(err => console.log(err))


const express = require('express')
const app = express()
const userRoute = require('./routes/user.js')
const commentRoute = require('./routes/comment.js')

app.use('/user', userRoute)
app.use('/comment', commentRoute)
const port = 3000
app.listen(port, () => {
    console.log('server listening on port 3000')
})


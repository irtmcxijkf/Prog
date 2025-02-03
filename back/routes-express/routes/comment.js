const express = require('express')
const router = express.Router()

router.get(
    '/',
    (req, res) => {
        res.send('here is your comment')
    }
)
router.post(
    '/',
    (req, res) => {
        res.send('comment created')
    }
)
router.put(
    '/',
    (req, res) => {
        res.send('comment updated')
    }
)
router.delete(
    '/',
    (req, res) => {
        res.send('comment deleted')
    }
)

module.exports = router
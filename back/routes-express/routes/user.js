const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController.js')

router.get(
    '/',
    controller.get
)
router.post(
    '/',
    (req, res) => {
        res.send('user created')
    }
)
router.put(
    '/',
    (req, res) => {
        res.send('user updated')
    }
)
router.delete(
    '/',
    (req, res) => {
        res.send('user deleted')
    }
)

module.exports = router
const router = require('express').Router()

router.use('/api', require('./googleBookAPI.js'))
router.use('/api', require('./bookRoutes.js'))

module.exports = router

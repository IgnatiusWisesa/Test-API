const express = require('express')
const router = express.Router()
const { testControllers } = require('../controllers');

router.get("/get-user", testControllers.fetchUser);

module.exports = router;
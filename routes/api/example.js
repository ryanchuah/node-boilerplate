const express = require("express")
const router = express.Router()

var mongoUtil = require('../../mongoUtil')
var db = mongoUtil.getDbData()

module.exports = router

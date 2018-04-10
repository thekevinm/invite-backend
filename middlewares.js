const express = require('express')
const mw = express()

mw.use((req, res, next) => {

	next()
})

mw.get("/", (req, res, next) => {
	res.message = "Hello"
	next()
})

mw.use((req, res, next) => {
	res.end()
})

module.exports = mw
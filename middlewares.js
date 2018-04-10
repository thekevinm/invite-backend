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

})

module.exports = mw
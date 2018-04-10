const express = require('express')
const router = express.Router()
const apiurl = 'https://randomuser.me'
const request = require('request')

router.get('/peeps', function(req, res) {
	request(apiurl, (err, resp) => {
		console.log(resp)
		res.json(resp.body)
	})
})

module.exports = router


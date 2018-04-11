const express = require('express')
const bodyParser = require('body-parser')
// const middlewares = require('./middlewares')
const mustacheExpress = require('mustache-express')
const path = require('path')
// var mainRouter = require('./routes')
const apiurl = 'https://randomuser.me/api/'
const request = require('request')

const app = express()

let db = {
	accepted: [],
	declined: []
}

app.engine('mustache', mustacheExpress())

app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res, next) => {
	request(apiurl, (err, resp) => {
		const body = JSON.parse(resp.body)
		const data = {
			picture: body.results[0].picture.large,
			name: body.results[0].name.first + body.results[0].name.last,
			email: body.results[0].email,
			cell: body.results[0].cell,
			countGoing: db.accepted.length || '0',
			countDeclined: db.declined.length || '0',
		}
		res.render('invite', data)
	})
})

// app.get('/', (req, res, next) => {
// 	const data = {

// 	}

// 	// res.render('invite', data)
// 	// res.render('going', data)
// })

// app.use(middlewares)

// app.use(mainRouter)



app.listen(3000, () => {
	console.log("Listening on 3000")
})
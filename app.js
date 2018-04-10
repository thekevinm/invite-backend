const express = require('express')
const bodyParser = require('body-parser')
const middlewares = require('./middlewares')
const mustacheExpress = require('mustache-express')
const path = require('path')

const app = express()

app.engine('mustache', mustacheExpress())

app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res, next) => {
	const data = {

	}

	res.render('invite', data)
})

app.use(middlewares)



app.listen(3000, () => {
	console.log("Listening on 3000")
})
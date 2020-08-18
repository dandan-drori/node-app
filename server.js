const express = require('express')
const cors = require('cors')
const app = express()
const usersRoutes = require('./routes/users')
const workoutsRoutes = require('./routes/workouts')
require('dotenv').config()
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const uri = `mongodb+srv://Dandan:${process.env.MONGODB_PASSWORD}@workouts.iw0b9.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH')
	if (req.method === 'OPTIONS') {
		res.header(
			'Access-Control-Allow-Method',
			'PUT',
			'POST',
			'PATCH',
			'DELETE',
			'GET'
		)
		return res.status(200).json({})
	}
	next()
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/users', cors(), usersRoutes)
app.use('/workouts', cors(), workoutsRoutes)
app.use(cors())

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})

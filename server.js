const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/Routes')
require('dotenv').config()

const port = process.env.PORT || 8000

app.use(express.urlencoded())
app.use(express.json())
app.use('/', cors(), routes)
app.use(cors())

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})

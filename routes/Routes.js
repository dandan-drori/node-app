const express = require('express')
const router = express.Router()

let users = [
	{ id: 1, name: 'Amanda', password: 'hashed', email: 'email@gmail.com' },
	{ id: 2, name: 'David', password: 'hashed', email: 'mail@gmail.com' },
]

router.get('/', (req, res) => {
	res.json({ message: 'go to /api' })
})

router.get('/api', (req, res) => {
	res.json({
		users: users,
	})
})

router.post('/api', (req, res) => {
	let lastId = users[users.length - 1].id
	users.push({ id: lastId + 1, ...req.body })
	res.status(200).json({
		message: req.body,
	})
})

module.exports = router

import express from 'express'
import config from './config/config.js'
import users from './routes/users.js'
import posts from './routes/posts.js'
import mongoose from 'mongoose'

const app = express()

// Middlewares
app.use(express.json())

// Rounting
users(app)
posts(app)
app.use('*', (req, res) => {
	res.status(404).json({ message: 'Страница не найдена' })
})

// Application launch function: connect to database and start listener
async function startApp() {
	await mongoose
		.connect(config.mongoUrl)
		.then(() => {
			app.listen(config.port, () => {
				console.log(`Server was started on port ${config.port}`)
			})
		})
		.catch(error => console.log(error))
}

startApp()

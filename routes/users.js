import {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
} from '../services/users.js'

export default app => {
	app.get('/users', getAllUsers)
	app.get('/users/:id', getUser)
	app.post('/users', createUser)
	app.put('/users/:id', updateUser)
	app.delete('/users/:id', deleteUser)
}

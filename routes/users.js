import Users from '../controllers/users.js'

export default app => {
	app.get('/users', Users.getAllUsers)
	app.get('/users/:id', Users.getUser)
	app.post('/users', Users.createUser)
	app.put('/users/:id', Users.updateUser)
	app.delete('/users/:id', Users.deleteUser)
}

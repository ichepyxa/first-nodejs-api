import Users from '../services/users.js'

class UsersController {
	async getAllUsers(req, res) {
		try {
			const users = await Users.getAllUsers()
			res.json(users)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async getUser(req, res) {
		try {
			const user = await Users.getUser(req.params.id)
			res.json(user)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async createUser(req, res) {
		try {
			const newUser = await Users.createUser(req.body)
			res.json(newUser)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async updateUser(req, res) {
		try {
			const newUser = await Users.updateUser(req.params.id, req.body)
			res.json(newUser)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async deleteUser(req, res) {
		try {
			const user = await Users.deleteUser(req.params.id)
			res.json(user)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new UsersController()

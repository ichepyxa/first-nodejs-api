import Users from '../models/users.js'
import bcrypt from 'bcrypt'

const getAllUsers = async (req, res) => {
	try {
		const users = await Users.find()
		res.json(users)
	} catch (error) {
		res.json(error)
	}
}

const getUser = async (req, res) => {
	try {
		const user = await Users.findById(req.params.id)
		res.json(user)
	} catch (error) {
		res.json(error)
	}
}

const createUser = (req, res) => {
	try {
		const user = req.body
		bcrypt.hash(user.password, 10, async (err, encryptedPassword) => {
			if (err) {
				throw new Error(err)
			}

			const newUser = await Users.create({
				username: user.username,
				password: encryptedPassword,
			})
			res.json(newUser)
		})
	} catch (error) {
		res.json(error)
	}
}

const updateUser = (req, res) => {
	try {
		const user = req.body
		bcrypt.hash(user.password, 10, async (err, encryptedPassword) => {
			if (err) {
				throw new Error(err)
			}

			const newUser = await Users.findByIdAndUpdate(
				req.params.id,
				{ username: user.username, password: encryptedPassword },
				{
					new: true,
				}
			)
			res.json(newUser)
		})
	} catch (error) {
		res.json(error)
	}
}

const deleteUser = async (req, res) => {
	try {
		const user = await Users.findByIdAndDelete(req.params.id)
		res.json(user)
	} catch (error) {
		res.json(error)
	}
}

export { getAllUsers, getUser, createUser, updateUser, deleteUser }

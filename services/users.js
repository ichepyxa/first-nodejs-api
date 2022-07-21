import Users from '../models/users.js'
import bcrypt from 'bcrypt'

class UsersService {
	async getAllUsers() {
		const users = await Users.find()
		return users
	}

	async getUser(id) {
		if (!id) {
			throw new Error('ID не указан')
		}

		const user = await Users.findById(id)
		return user
	}

	createUser(post) {
		bcrypt.hash(post.password, 10, async (err, encryptedPassword) => {
			if (err) {
				throw new Error(err)
			}

			const newUser = await Users.create({
				username: post.username,
				password: encryptedPassword,
			})
			return newUser
		})
	}

	updateUser(id, post) {
		if (!id) {
			throw new Error('ID не указан')
		}

		bcrypt.hash(post.password, 10, async (err, encryptedPassword) => {
			if (err) {
				throw new Error(err)
			}

			const newUser = await Users.findByIdAndUpdate(
				id,
				{ username: post.username, password: encryptedPassword },
				{
					new: true,
				}
			)
			return newUser
		})
	}

	async deleteUser(id) {
		if (!id) {
			throw new Error('ID не указан')
		}

		const user = await Users.findByIdAndDelete(id)
		return user
	}
}

export default new UsersService()

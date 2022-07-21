import Posts from '../models/posts.js'

class PostsService {
	async getAllPosts() {
		const posts = await Posts.find()
		return posts
	}

	async getPost(id) {
		if (!id) {
			throw new Error('ID не указан')
		}

		const post = await Posts.findById(id)
		return post
	}

	async createPost(post) {
			const newPost = await Posts.create(post)
			return newPost
	}

	async updatePost(id, post) {
		if (!id) {
			throw new Error('ID не указан')
		}

		const newPost = await Posts.findByIdAndUpdate(id, post, {
			new: true,
		})
		return newPost
	}

	async deletePost(id) {
		if (!id) {
			throw new Error('ID не указан')
		}

		const post = await Posts.findByIdAndDelete(id)
		return post
	}
}

export default new PostsService()

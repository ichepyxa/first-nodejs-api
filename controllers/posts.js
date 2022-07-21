import Posts from '../services/posts.js'

class PostsController {
	async getAllPosts(req, res) {
		try {
			const posts = await Posts.getAllPosts()
			res.json(posts)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async getPost(req, res) {
		try {
			const post = await Posts.getPost(req.params.id)
			res.json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async createPost(req, res) {
		try {
			const newPost = await Posts.createPost(req.body)
			res.json(newPost)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async updatePost(req, res) {
		try {
			const newPost = await Posts.updatePost(req.params.id, req.body)
			res.json(newPost)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async deletePost(req, res) {
		try {
			const post = await Posts.deletePost(req.params.id)
			res.json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new PostsController()

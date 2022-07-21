import Posts from '../models/posts.js'

const getAllPosts = async (req, res) => {
	try {
		const posts = await Posts.find()
		res.json(posts)
	} catch (error) {
		res.json(error)
	}
}

const getPost = async (req, res) => {
	try {
		const post = await Posts.findById(req.params.id)
		res.json(post)
	} catch (error) {
		res.json(error)
	}
}

const createPost = async (req, res) => {
	try {
		const newPost = await Posts.create(req.body)
		res.json(newPost)
	} catch (error) {
		res.json(error)
	}
}

const updatePost = async (req, res) => {
	try {
		const newPost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		res.json(newPost)
	} catch (error) {
		res.json(error)
	}
}

const deletePost = async (req, res) => {
	try {
		const post = await Posts.findByIdAndDelete(req.params.id)
		res.json(post)
	} catch (error) {
		res.json(error)
	}
}

export { getAllPosts, getPost, createPost, updatePost, deletePost }

import {
	getAllPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
} from '../services/posts.js'

export default app => {
	app.get('/posts', getAllPosts)
	app.get('/posts/:id', getPost)
	app.post('/posts', createPost)
	app.put('/posts/:id', updatePost)
	app.delete('/posts/:id', deletePost)
}

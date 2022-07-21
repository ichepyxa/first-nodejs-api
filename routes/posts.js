import Posts from '../controllers/posts.js'

export default app => {
	app.get('/posts', Posts.getAllPosts)
	app.get('/posts/:id', Posts.getPost)
	app.post('/posts', Posts.createPost)
	app.put('/posts/:id', Posts.updatePost)
	app.delete('/posts/:id', Posts.deletePost)
}

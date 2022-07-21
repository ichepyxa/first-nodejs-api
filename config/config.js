export default {
	port: process.env.PORT || 5000,
	mongoUrl: `mongodb+srv://admin:${
		process.env.password || ''
	}@cluster0.yd41umr.mongodb.net/?retryWrites=true&w=majority`,
}

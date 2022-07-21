import mongoose from 'mongoose'

const Users = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }],
})

export default mongoose.model('Users', Users)

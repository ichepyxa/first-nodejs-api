import mongoose from 'mongoose'

const Posts = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
	body: { type: String, required: true },
	comments: [{ body: String, date: { type: Date, default: Date.now } }],
	date: { type: Date, default: Date.now },
})

export default mongoose.model('Posts', Posts)

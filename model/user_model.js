const mongoose = require('mongoose')
const moment = require('moment');
const mongoSchema = mongoose.Schema({
	fullname: String,
	username: String,
	password: String,
	address: String,
	phone: String,
	role: {
		type: Number,
		default: 1
	},
	created_at: {
		type: Date,
		default: new Date().toISOString()
	}
})
module.exports = mongoose.model('users', mongoSchema)

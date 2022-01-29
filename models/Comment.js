// 1. IMPORTACIONES
const mongoose		= require("mongoose")


// 2. SCHEMA
const commentSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})


// 3. MODELO
const Comment = mongoose.model("Comment", commentSchema)

// 4. EXPORTACIÓN
module.exports = Comment
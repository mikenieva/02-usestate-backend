const Comment = require("./../models/Comment")

exports.readAll = async (req, res) => {

	// 1. ENCONTRAR TODOS LOS COMENTARIOS EN BD
	const allComments = await Comment.find()

	// 2. RETORNARLOS AL CLIENTE CON UN MSG
	res.status(200).json({
		msg: "Todos los comentarios obtenidos exitosamente.",
		data: allComments
	})


}


exports.create = async (req, res) => {

	// 1. OBTENER LOS DATOS DEL FORMULARIO
	const { title, description } = req.body

	// 2. CREAR EL COMENTARIO EN BASE DE DATOS
	const newComment = await Comment.create({
		title,
		description
	})

	// 3. RETORNAR UN MENSAJE DE QUE EL COMENTARIO FUE CREADO EXITOSAMENTE, ASÍ COMO LA INFORMACIÓN DEL MISMO
	res.status(200).json({
		msg: "Se ha creado correctamente el comentario.",
		data: newComment
	})

}
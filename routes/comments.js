// 1. IMPORTACIONES
const express			= require("express")
const router			= express.Router()

const commentsController	= require("./../controllers/commentsController")


// 2. RUTAS
// SERVICIO QUE PERMITE OBTENER TODOS LOS COMENTARIOS
router.get("/readall", commentsController.readAll)

// SERVICIO QUE PERMITA GENERAR UN COMENTARIO
router.post("/create", commentsController.create)



// 3. EXPORTACIÓN
module.exports = router
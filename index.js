// ./index.js

// 1. IMPORTACIONES
const express 			= require("express")
const app				= express()
const cors				= require("cors")

const connectDB			= require("./config/db")

// GESTIÓN DE LAS VARIABLES DE ENTORNO
require("dotenv").config()

connectDB()


// 2. MIDDLEWARES
app.use(cors())

app.use(express.json({ extended: true }))



// 3. RUTEO
app.use("/api/comments", require("./routes/comments"))



// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log("Servidor activo")
})
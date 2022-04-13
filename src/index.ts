import express from 'express'
import { categoriaRouter } from './routes/Categorias.routes'
const app = express()

app.use(express.json())

app.use("/Categoria",categoriaRouter)

app.listen(3333, ()=> console.log("rodando!"))
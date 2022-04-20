import express from 'express'
import { categoriaRouter } from './routes/Categorias.routes'
import { especificacaoRouter } from './routes/Especificacao.routes'
const app = express()

app.use(express.json())

app.use("/Categoria",categoriaRouter)
app.use("/Especificacao",especificacaoRouter)

app.listen(3333, ()=> console.log("rodando!"))
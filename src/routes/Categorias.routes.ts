import {Router} from 'express'
import {CategoriaRepository} from '../Repository/CategoriaRepository'
import { PostgresCategoriaRepository } from '../Repository/PostgresCategoriaRepository'
import { CreateCategoriaService } from '../services/CreateCategoriaServerce'

const categoriaRouter = Router()
const categoriaRepositories= new CategoriaRepository()


categoriaRouter.post("/", (req, res)=> {
const {name, description}= req.body

const createCategoriaService = new CreateCategoriaService(categoriaRepositories)

createCategoriaService.execute({name, description}) 
    return res.status(201).json(createCategoriaService)
})

categoriaRouter.get("/", (req, res)=>{
    const todosCategorias = categoriaRepositories.list();

    return res.status(202).json(todosCategorias)
})

export {categoriaRouter};
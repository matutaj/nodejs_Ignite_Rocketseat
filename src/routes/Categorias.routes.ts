import {Router} from 'express'
import { createCategoriaController } from '../modules/cars/useCases/CreateCategoria'
import { listCategoriaController } from '../modules/cars/useCases/ListCategoriaController'

const categoriaRouter = Router()

categoriaRouter.post("/", (req, res)=> {
    return createCategoriaController.handle(req, res)
})

categoriaRouter.get("/", (req, res)=>{

    return listCategoriaController.handle(req,res)
})

export {categoriaRouter};
import {Router} from 'express'
import {CategoriaRepository} from '../Repository/CategoriaRepository'

const categoriaRouter = Router()
const categoriaRepositories= new CategoriaRepository()

categoriaRouter.post("/", (req, res)=> {

    const  {name, description} = req.body

    const categoriaExist = categoriaRepositories.findByName(name)

    if(categoriaExist){
        return res.status(401).json({messenger:"Já existe está categoria!"})
    }

    categoriaRepositories.create({name, description});

 
    return res.status(201).json(categoriaRepositories)
})
categoriaRouter.get("/", (req, res)=>{
    const todosCategorias = categoriaRepositories.list();

    return res.status(202).json(todosCategorias)
})



export {categoriaRouter};
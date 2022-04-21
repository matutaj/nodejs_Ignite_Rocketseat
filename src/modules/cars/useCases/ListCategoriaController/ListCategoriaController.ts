import{Request, Response}from  'express'
import {ListCategoriaUseCase} from './ListCategoriaUseCase'


class ListCategoriaController{

    constructor( private listCategoriaUseCase:ListCategoriaUseCase){}

    handle(req:Request, res:Response){
        const categorias = this.listCategoriaUseCase.execute()

        return res.status(201).json(categorias)
    }
    
}

export {ListCategoriaController}
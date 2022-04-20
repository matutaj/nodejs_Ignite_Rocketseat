import {Request,Response}from 'express'
import {CategoriaRepository} from '../../Repository/CategoriaRepository'
import { CreateCategoriauseCase } from './CreateCategoriauseCase'


class CreateCAtegoriaController{

    constructor(private  createCategoriaUseCase:CreateCategoriauseCase){}

    handle(req:Request, res:Response){
        const {name,description} = req.body

       this.createCategoriaUseCase.execute({name, description})

     return res.status(201).json(this.createCategoriaUseCase)
    }

}

export {CreateCAtegoriaController}
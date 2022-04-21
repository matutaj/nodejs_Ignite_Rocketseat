import {Request, Response} from 'express'
import { CreateEspecificacaoUseCase } from './CreateEspeficacaoUseCase'

class CreateEspeficicacaoController{

    constructor( private createEspecificacaoUseCase:CreateEspecificacaoUseCase){};

    handle(req:Request, res:Response){
        const {name, description}= req.body

        this.createEspecificacaoUseCase.execute({name, description})

        return res.status(201).json(this.createEspecificacaoUseCase)

    }

}

export {CreateEspeficicacaoController}
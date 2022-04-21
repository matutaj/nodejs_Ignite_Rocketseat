import {Request, Response} from 'express'
import { ListEspecificacaoUseCase } from "./ListEspecificacaoUseCase";


class ListEspecificacaoController{
    constructor( private listEspecificacaoUseCase:ListEspecificacaoUseCase){}

    handle(req:Request, res:Response){
       const especificacao= this.listEspecificacaoUseCase.execute()

       return res.status(201).json(especificacao)
    }
}

export {ListEspecificacaoController}
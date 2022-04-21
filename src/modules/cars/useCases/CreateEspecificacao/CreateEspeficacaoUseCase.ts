import {ICreateEspecificacao}from '../../Repository/IespecificacaoRepository'
import {EspecificacaoRepository} from '../../Repository/EspecificacaoRepository'


class CreateEspecificacaoUseCase{
    constructor(private createEspecificacao:EspecificacaoRepository){}

    execute({name,description}:ICreateEspecificacao):void{
        const createEspecificExist = this.createEspecificacao.findByName(name);

        if(createEspecificExist){
            throw new Error("Já existe Está Especificacao!")
        }

        this.createEspecificacao.create({name, description})
    }
}



export {CreateEspecificacaoUseCase}
import { Especificacao } from "../../model/especificacao";
import { IEspecificRepository } from "../../Repository/IespecificacaoRepository";

class ListEspecificacaoUseCase{
    constructor ( private createEspecificacaoRepository:IEspecificRepository){}

    execute():Especificacao[]{
        const especification = this.createEspecificacaoRepository.list()

        return especification;
    }
}

export{ListEspecificacaoUseCase}
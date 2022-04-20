import {Especificacao}from '../model/especificacao'
import {ICreateEspecificacao, IEspecificRepository} from './IespecificacaoRepository'


class EspecificacaoRepository  {

        private especificacao: Especificacao[];

        constructor(){
            this.especificacao=[]
        }
    create({name,description}:ICreateEspecificacao):void{

        const especific = new Especificacao()

        Object.assign(especific,{
            name,
            description,
            created_at:new Date()
        
        })
        this.especificacao.push(especific)
    }

    findByName(name:string):Especificacao{
        const especific = this.especificacao.find(veri => veri.name ===name)

        return especific;
    }

    list():Especificacao[]{
        return this.especificacao
    }
}


export {EspecificacaoRepository}
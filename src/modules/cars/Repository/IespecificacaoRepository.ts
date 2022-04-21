import { Especificacao } from "../model/especificacao";

interface  ICreateEspecificacao{
    name:string;
    description:string;
 
}

interface IEspecificRepository{
    findByName(naḿe:string, description:string):Especificacao;
    list():Especificacao[];
    create({name, description}:ICreateEspecificacao):void

}

export {IEspecificRepository, ICreateEspecificacao}
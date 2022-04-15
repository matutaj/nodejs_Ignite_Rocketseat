import {ModelCategoria} from '../model/Categoria'

interface IcreateCategoria{
    name: string;
    description:string;
}


interface ICategoriaRepository{
    findByName(name:string):ModelCategoria;
    list():ModelCategoria[];
    create({name, description}:IcreateCategoria):void;
}

export {ICategoriaRepository, IcreateCategoria}


import { ModelCategoria } from "../model/Categoria";
import { ICategoriaRepository, IcreateCategoria } from "./ICategoriaRespository";


class PostgresCategoriaRepository implements ICategoriaRepository{
    findByName(name: string): ModelCategoria {
        console.log(name)
        return null;
    }
    list(): ModelCategoria[] {
        return null;
    }
    create({name, description}:IcreateCategoria): void {
        console.log(name, description)
    }

}
export {PostgresCategoriaRepository}
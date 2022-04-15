import { ICategoriaRepository, IcreateCategoria } from "../Repository/ICategoriaRespository";

interface IRequest{
    name:string;
    description:string;
}


class CreateCategoriaService{
    constructor(private categoriaRespository:ICategoriaRepository){}

    execute({name, description}:IRequest):void{
        const categoriaExist =this.categoriaRespository.findByName(name);

        if(categoriaExist){
            throw new Error("Já existe este tipo de categoria!")
                }
                this.categoriaRespository.create({name, description})

    }
}

export {CreateCategoriaService}
import { ModelCategoria } from "../model/Categoria"

interface IcreateCategoria{
    name: string;
    description:string;
}

class CategoriaRepository {

    private categorias : ModelCategoria[];

    constructor (){
        this.categorias= []
    }

    create({name, description}:IcreateCategoria):void{
        const categoria = new ModelCategoria()
        
     
        Object.assign(categoria, {
            name,
            description,
            created_at:new Date()
        })

        this.categorias.push(categoria)   
    }
    list():ModelCategoria[]{
        return this.categorias
    }

    findByName(name:string):ModelCategoria{
        const categoria = this.categorias.find(cate=>cate.name === name)

        return categoria;
    }
}


export {CategoriaRepository}
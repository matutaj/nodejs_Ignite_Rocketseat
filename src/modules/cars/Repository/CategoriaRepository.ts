import { ModelCategoria } from "../model/Categoria"
import { ICategoriaRepository, IcreateCategoria } from "./ICategoriaRespository";


class CategoriaRepository  implements ICategoriaRepository{

    private categorias : ModelCategoria[];

    private static INSTANCE:CategoriaRepository;


    private constructor (){
        this.categorias=[]
    }

    public static getInstance():CategoriaRepository{
        if(!CategoriaRepository.INSTANCE){
            CategoriaRepository.INSTANCE=new CategoriaRepository();
        }
        return CategoriaRepository.INSTANCE
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
        const categoria = this.categorias.find(veri=>veri.name === name)

        return categoria;
    }
}


export {CategoriaRepository}
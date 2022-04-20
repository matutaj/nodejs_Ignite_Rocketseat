import { ModelCategoria } from "../../model/Categoria";
import { ICategoriaRepository } from "../../Repository/ICategoriaRespository";


class ListCategoriaUseCase {

constructor(private createCategoriaRepository:ICategoriaRepository){}

execute():ModelCategoria[]{
    const categorias= this.createCategoriaRepository.list()

    return categorias;
}

}

export{ListCategoriaUseCase}
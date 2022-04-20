import { CategoriaRepository } from "../../Repository/CategoriaRepository";
import { ListCategoriaController } from "./ListCategoriaController";
import { ListCategoriaUseCase } from "./ListCategoriaUseCase";


const  categoriaRepository= new CategoriaRepository
const listCategoriaUseCase = new ListCategoriaUseCase(categoriaRepository)
const listCategoriaController= new ListCategoriaController(listCategoriaUseCase)

export{listCategoriaController}
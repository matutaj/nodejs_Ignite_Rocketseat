import { CategoriaRepository } from "../../Repository/CategoriaRepository";
import { CreateCAtegoriaController } from "./CreateCategoriaController";
import { CreateCategoriauseCase } from "./CreateCategoriauseCase";


const categoriaRepository= new CategoriaRepository()
const createCategoriauseCase =new CreateCategoriauseCase(categoriaRepository)
const createCategoriaController = new CreateCAtegoriaController(createCategoriauseCase)

export {createCategoriaController}
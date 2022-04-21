import { EspecificacaoRepository } from "../../Repository/EspecificacaoRepository";
import { CreateEspeficicacaoController } from "./CreateEspecificacaoController.ts";
import { CreateEspecificacaoUseCase } from "./CreateEspeficacaoUseCase";

const especificacaoRepository= EspecificacaoRepository.getInstance()
const createEspecificacaoUseCase = new CreateEspecificacaoUseCase(especificacaoRepository)
const createEspecificacaoController = new CreateEspeficicacaoController(createEspecificacaoUseCase)

export {createEspecificacaoController}
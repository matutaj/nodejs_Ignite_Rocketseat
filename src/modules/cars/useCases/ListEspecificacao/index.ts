import { EspecificacaoRepository } from "../../Repository/EspecificacaoRepository";
import { ListEspecificacaoController } from "./ListEspecificacaoController";
import { ListEspecificacaoUseCase } from "./ListEspecificacaoUseCase";

const especificacaoRepository = EspecificacaoRepository.getInstance()
const listEspecificacaoUseCase = new ListEspecificacaoUseCase(especificacaoRepository)
const listEspecificacaoController = new ListEspecificacaoController(listEspecificacaoUseCase)

export {listEspecificacaoController}
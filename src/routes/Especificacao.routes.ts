import {Router} from "express"
import { CreateEspecificacaoService } from "../modules/cars/services/CreateEspeficacaoService";
import {EspecificacaoRepository} from '../modules/cars/Repository/EspecificacaoRepository'

const especificacaoRouter = Router();
const especificacaoRepository = new EspecificacaoRepository()

especificacaoRouter.post("/", (req, res)=>{
    const {name, description} = req.body
    
    const CreateEspecificacao = new CreateEspecificacaoService(especificacaoRepository)

    CreateEspecificacao.execute({name, description});
    return res.status(201).json(CreateEspecificacao);

})
especificacaoRouter.get("/", (req, res)=>{
    const todoEspecificaca = especificacaoRepository.list()

    return res.status(201).json(todoEspecificaca)
})
export {especificacaoRouter}
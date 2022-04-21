import {Router} from "express"
import { createEspecificacaoController } from "../modules/cars/useCases/CreateEspecificacao";
import { listEspecificacaoController } from "../modules/cars/useCases/ListEspecificacao";


const especificacaoRouter = Router();

especificacaoRouter.post("/", (req, res)=>{
return createEspecificacaoController.handle(req, res)
})
especificacaoRouter.get("/", (req, res)=>{

    return listEspecificacaoController.handle(req, res)
})
export {especificacaoRouter}
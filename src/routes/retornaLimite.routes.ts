import { Router } from 'express';

import RetornaLimite from '../services/RetornaLimite.services';

const adicionaEntradaRouter = Router();

adicionaEntradaRouter.get('/', async (request, response) => {
  const retornaLimite = new RetornaLimite();
  const params = request.body;
  const retorno = await retornaLimite.getLimite();

  return response.json({ retorno });
});

export default adicionaEntradaRouter;

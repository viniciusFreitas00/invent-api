import { Router } from 'express';

import RetornaPessoas from '../services/RetornaPessoas.services';

const adicionaEntradaRouter = Router();

adicionaEntradaRouter.get('/', async (request, response) => {
  const retornaPessoas = new RetornaPessoas();
  const retorno = await retornaPessoas.getPessoas();

  return response.json({ retorno });
});

export default adicionaEntradaRouter;

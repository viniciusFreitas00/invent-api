import { Router } from 'express';

import AdicionaEntrada from '../services/AdicionaEntrada.services';

const adicionaEntradaRouter = Router();

adicionaEntradaRouter.post('/', async (request, response) => {
  const adicionaEntrada = new AdicionaEntrada();
  const aux = await adicionaEntrada.adicionaEntrada(request.body.usuario);

  return response.json({error: aux});
});

export default adicionaEntradaRouter;

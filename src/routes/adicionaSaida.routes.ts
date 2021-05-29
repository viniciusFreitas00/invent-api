import { Router } from 'express';

import AdicionaSaida from '../services/AdicionaSaida.services';

const adicionaSaidaRouter = Router();

adicionaSaidaRouter.post('/', async (request, response) => {
  const adicionaSaida = new AdicionaSaida();
  const aux = await adicionaSaida.adicionaSaida(request.body.id_acesso);

  return response.json({ error: aux });
});

export default adicionaSaidaRouter;

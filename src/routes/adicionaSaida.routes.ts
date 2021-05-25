import { Router } from 'express';

import AdicionaSaida from '../services/AdicionaSaida.services';

const adicionaSaidaRouter = Router();

adicionaSaidaRouter.post('/', async (request, response) => {
  const adicionaSaida = new AdicionaSaida();
  const aux = await adicionaSaida.adicionaSaida();

  return response.json({ error: !aux.rowCount });
});

export default adicionaSaidaRouter;

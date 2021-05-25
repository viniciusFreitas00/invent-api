import { Router } from 'express';

import testRouter from './test.routes';
import adicionaEntradaRouter from './adicionaEntrada.routes';
import adicionaSaidaRouter from './adicionaSaida.routes';

const routes = Router();

routes.use('/test', testRouter);
routes.use('/adicionaEntrada', adicionaEntradaRouter);
routes.use('/adicionaSaida', adicionaSaidaRouter);

export default routes;

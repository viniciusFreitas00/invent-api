import { Router } from 'express';

import testRouter from './test.routes';
import adicionaEntradaRouter from './adicionaEntrada.routes';
import adicionaSaidaRouter from './adicionaSaida.routes';
import login from './login.routes';
import retornaLimite from './retornaLimite.routes';

const routes = Router();

routes.use('/test', testRouter);
routes.use('/adicionaEntrada', adicionaEntradaRouter);
routes.use('/adicionaSaida', adicionaSaidaRouter);
routes.use('/login', login);
routes.use('/limite', retornaLimite);

export default routes;

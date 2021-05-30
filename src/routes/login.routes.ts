import { Router } from 'express';

import Login from '../services/Login.services';

const adicionaEntradaRouter = Router();

adicionaEntradaRouter.get('/', async (request, response) => {
  const login = new Login();
  const params = request.body;
  const retorno = await login.validaLogin(params.usuario, params.senha);
  const usuario = retorno.rows[0];

  return response.json({ usuario });
});

export default adicionaEntradaRouter;

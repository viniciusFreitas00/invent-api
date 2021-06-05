import { Router } from 'express';

import Login from '../services/Login.services';

const login = Router();

login.post('/', async (request, response) => {
  try {
    const login = new Login();
    const { usuario, senha } = request.body;
    const retorno = await login.validaLogin(usuario, senha);
    const user = retorno.rows[0];

    if (retorno.rowCount) {
      return response.status(200).json({ user });
    } else {
      return response.status(401).json({ user });
    }
  } catch (err) {
    response.status(400).json({ error: 'deu ruim' });
  }
});

export default login;

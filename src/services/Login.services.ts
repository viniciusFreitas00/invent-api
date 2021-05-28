import pool from '../database';
var prep = require('pg-prepared');

export default class Login {
  public async validaLogin(usuario: string, senha: string) {
    const item = prep(
      'select * from  usuario where login = ${login} and senha  = ${senha}',
    );

    return pool.query(item({ login: usuario, senha: senha }));
  }
}

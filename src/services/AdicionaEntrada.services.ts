import pool from '../database';
var prep = require('pg-prepared');

export default class AdicionaEntrada {
  public async adicionaEntrada(usuario: string) {
    const item = prep('insert into entrada values(${id}, NOW())');
    let retorno: boolean = false;

    pool.query(item({ id: usuario }), (error, result) => {
      if (error) {
        retorno = true;
      }
    });

    return retorno;
  }
}

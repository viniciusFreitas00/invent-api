import pool from '../database';
var prep = require('pg-prepared');

export default class AdicionaSaida {
  public async adicionaSaida(id_acesso: string) {
    const item = prep(
      'update entrada set data_saida = now() where id_acesso = ${id}',
    );
    let retorno: boolean = false;

    pool.query(item({ id: id_acesso }), (error, result) => {
      if (error) {
        retorno = true;
      }
    });

    return retorno;
  }
}

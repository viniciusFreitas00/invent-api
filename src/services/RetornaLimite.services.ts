import pool from '../database';

export default class RetornaLimite {
  public async getLimite() {
    const retorno = await pool.query(
      'select limite_de_pessoas from administrativo a  order by date desc ',
    );

    return retorno.rows[0];
  }
}

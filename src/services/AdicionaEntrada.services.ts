import pool from '../database';

export default class AdicionaEntrada {
  public async adicionaEntrada() {
    return pool.query(`
            insert into table_name
            select  max(column1) + 1, 'entrada ' || max(column1) + 1  from  table_name 
        `);
  }
}

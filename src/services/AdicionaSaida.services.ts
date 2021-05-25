import pool from '../database';

export default class AdicionaSaida {
  public async adicionaSaida() {
    return pool.query(`
            insert into table_name
            select  max(column1) + 1, 'saida ' || max(column1) + 1  from  table_name 
        `);
  }
}

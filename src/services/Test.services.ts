import pool from '../database';

export default class Test {
  public async getMessage() {
    return pool.query('select * from table_name ');
  }
}

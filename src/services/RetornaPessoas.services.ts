import pool from '../database';

export default class RetornaPessoas {
  public async getPessoas() {
    const retorno = await pool.query(
       `select *
        from entrada e 
        where 
            data_saida isnull 
           --and cast (data_entrada as date) = cast(now() as date)
        `,
    );

    console.log(retorno)
    return retorno.rows;
  }
}

import pool from '../database';

export default class RetornaPessoas {
  public async getPessoas() {
    const retorno = await pool.query(
       `select id_acesso,identificador , to_char(data_entrada, 'dd/mm/yyyy HH24:MI:SS') as data_entrada
        from entrada e 
        where 
            data_saida isnull 
           --and cast (data_entrada as date) = cast(now() as date)
        `,
    );

    return retorno.rows;
  }
}

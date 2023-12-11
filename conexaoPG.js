const { Pool, Client } = require('pg');

// Configurações de conexão com o PostgreSQL
const config = {
  user: 'seu_usuario',
  host: 'localhost',
  database: 'seu_banco_de_dados',
  password: 'sua_senha',
  port: 5432,
};

// Cria uma pool de clientes PostgreSQL
const pool = new Pool(config);

// Exemplo de consulta SQL
const sqlQuery = 'SELECT * FROM sua_tabela';

// Consulta usando a pool
pool.query(sqlQuery, (err, result) => {
  if (err) {
    return console.error('Erro na consulta', err);
  }
  console.log('Resultado da consulta:', result.rows);
  pool.end(); // Fecha a conexão da pool quando terminar
});

// Se preferir, você também pode usar um cliente único para consultas
// const client = new Client(config);
// client.connect();
// client.query(sqlQuery, (err, result) => {
//   if (err) {
//     return console.error('Erro na consulta', err);
//   }
//   console.log('Resultado da consulta:', result.rows);
//   client.end(); // Fecha a conexão do cliente quando terminar
// });
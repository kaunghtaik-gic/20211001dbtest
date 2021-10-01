// Postgres
const {Client} = require('pg');
require('dotenv').config();
  const client = new Client({ 
    user: 'kh',
    host: 'aayy70i9w3o612.cmzy7tos3igh.ap-northeast-1.rds.amazonaws.com',
    database: 'ebdb',
    password: 'kaunghtaik',
    port: '5432'
  });

//   const client = new Client({ 
//     user: process.env.RDS_USERNAME,
//     host: process.env.RDS_HOSTNAME,
//     database: process.env.RDS_DB_NAME,
//     password: process.env.RDS_PASSWORD,
//     port: process.env.RDS_PORT
//   });

//   console.log({
//     user: process.env.RDS_USERNAME,
//     host: process.env.RDS_HOSTNAME,
//     database: process.env.RDS_DB_NAME,
//     password: process.env.RDS_PASSWORD,
//     port: process.env.RDS_PORT
//  })

// Postgresと接続する（ローカル）
// const client = new Client({
//     user:'postgres',
//     host:'localhost',
//     database:'postgres-test',
//     password:'root',
//     port:'5432',
// });

client.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Postgres Connected!');
    }
});  
module.exports = client; 
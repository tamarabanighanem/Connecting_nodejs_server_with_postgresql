const express=require("express")
const app=express()
const cors=require('cors')
const port=8001
app.use(cors())
app.use(express.json())

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Test',
  password: 'password',
  port: 5432, // default PostgreSQL port is 5432
});
pool.query('SELECT * FROM test1', (err, result) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Query result:', result.rows);
  }
});
app.post('/login',(req,res)=>{
  const {name,age}=req.body
  pool.query('INSERT INTO test1(name,age) VALUES($1,$2)',[name,age],(err,result)=>{
    if(err){
      console.error(err)
    }else{
      console.log(result.rows)
    }
})})












app.listen(port,()=>{console.log(`app run on ${port} port`)})

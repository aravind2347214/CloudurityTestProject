const express= require('express')
var mysql = require('mysql')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
app.use(cors())
app.use(bodyParser.json());

const PORT=8000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aluminiapp',
    port: 3306 // MySQL default port is 3306
  });


  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      console.log("Check DB connection")
      return;
    }
    console.log('Connected to MySQL database');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  });


// ------ Manage Years ------
app.get("/get-all-years",(req,res)=>{
    const sql = "SELECT * FROM year"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })

})

// ------ Manage Departments -----
app.get("/get-all-departments",(req,res)=>{
    const sql = "SELECT * FROM department"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
    
})

// ------ Manage Students -----
app.get("/get-all-students",(req,res)=>{
    const sql = "SELECT * FROM student"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
    
})

app.post('/add-year', (req, res) => {
    console.log("add year called")
    const { year } = req.body;
    const sql = "INSERT INTO year (year) VALUES (?)";
  
    connection.query(sql, [year], (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'Year added successfully' });
    });
  });
  
  app.post('/add-department', (req, res) => {
    const { name } = req.body;
    const sql = "INSERT INTO department (name) VALUES (?)";
  
    connection.query(sql, [name], (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'Department added successfully' });
    });
  });
  
  app.post('/add-student', (req, res) => {
    const { name, dob, contact, email, department, year, specialization, extracurricular, co_curricular } = req.body;
    const sql = "INSERT INTO student (name, dob, contact, email, department, year, specialization, extracurricular, co_curricular) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  
    connection.query(sql, [name, dob, contact, email, department, year, specialization, extracurricular, co_curricular], (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'Student added successfully' });
    });
  });
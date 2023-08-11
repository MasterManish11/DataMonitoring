// const connection = require("./connection")
require('dotenv').config()
const sql = require("msnodesqlv8");
const express =require("express")
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors")
const connectionString = `Driver={${process.env.DB_DRIVER}};Server=${process.env.DB_SERVER},${process.env.DB_PORT};
Database=${process.env.DB_DATABASE};Uid=${process.env.DB_UID};Pwd=${process.env.DB_PASSWORD};Encrypt=yes;
TrustServerCertificate=no;Connection Timeout=30;`

app.use(bodyParser.json())

app.use(cors({
    origin: "*"
}))

// GET Request 

app.get("/productiondetail",(req,res)=>{
const query = "SELECT * FROM dbo.realtimedata";

sql.query(connectionString, query, (err, rows) => {
    // console.log(rows);
    res.send(rows)
});

})
// app.get("/noem",(req,res)=>{

// connection.query("SELECT * FROM noem",(err,rows)=>{
//     if(err){
//         console.log(err)
//     }else{
//         res.json(rows)
//     }
// })

// })

// app.get("/energyproduction",(req,res)=>{

//     var output = []
//  for(let i = 1; i<=10; i++){

//      var sql=`SELECT 'em${i>9?i:`0${i}`}' AS EnergyMeter,  max(kwhr)-min(kwhr) AS KWhr
//      FROM kirandatabase.em${i>9?i:`0${i}`} WHERE LogDate BETWEEN '${req.query.fdate}' AND '${req.query.tdate}'`
     
//      connection.query(sql,(err,rows)=>{ 
//          if(err){
//              console.log(err)
//             }else{
//                 output.push(rows[0])
//             }
//         })
//     }
//     setTimeout(() => {       
//         res.json(output)
//     }, 1000);
    
//     })


// Post Request

// app.post("/employees",(req,res)=>{
// const payload =[req.body.ID,req.body.FirstName,req.body.Salary]
//     connection.query("INSERT INTO employe(ID,FirstName,Salary) values(?)",[payload],(err,rows)=>{
//         if(err){
//             console.log(err)
//         }else{
//             // console.log(rows)
//         res.send(rows)
//         }
//     })
    
//     })

//  Perticular ID Request

// app.get("/employees/:id",(req,res)=>{
//         connection.query("SELECT * FROM employe WHERE id=?",[req.params.id],(err,rows)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 // console.log(rows)
//             res.send(rows)
//             }
//         })
        
//         })
    
// Delete Record Perticular id

// app.delete("/employees/:id",(req,res)=>{
//     connection.query("DELETE FROM employe WHERE id=?",[req.params.id],(err,rows)=>{
//         if(err){
//             console.log(err)
//         }else{
//             // console.log(rows)
//         res.send(rows)
//         }
//     })
    
//     })

// Delete Record Perticular Name 

// app.delete("/employees",(req,res)=>{
//     connection.query("DELETE FROM employe WHERE FirstName IS NULL",(err,rows)=>{
//         if(err){
//             console.log(err)
//         }else{
//             // console.log(rows)
//         res.send(rows)
//         }
//     })
    
//     })
// app.delete("/employees/:FirstName",(req,res)=>{
//     connection.query("DELETE FROM employe WHERE FirstName =?",[req.params.FirstName],(err,rows)=>{
//         if(err){
//             console.log(err)
//         }else{
//             // console.log(rows)
//         res.send(rows)
//         }
//     })
    
//     })


app.listen(3000, ()=> 
console.log("Express server is running on port 3000")
)


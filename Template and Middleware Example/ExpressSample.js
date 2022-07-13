const express=require('express')
const app=express()
var router = express.Router();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Called Post Request')
    //Addthe mysql connection logic 
    //Retrive the database results
    
  })

  app.put('/', (req, res) => {
    res.send('Called PUT Request')
  })

  app.all('*',(req,res)=>{
    res.send('All requesteds are accepted')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
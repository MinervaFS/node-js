const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')
const { error } = require('console')

app.use(bodyParser.json())

// app.get("/", (req, res) => { })

// app.post("/", (req, res) => { })

// app.put("/", (req, res) => { })

// app.delete("/", (req, res) => {})

app.get(`/`, (req, res) => {
  const sql = "SELECT * FROM pesanan"
  db.query(sql, (error, result) => {
    //hasil data dari database mysql
    response(200, result, "get all data order design", res)
    // console.log(result)
    // // response.send(result)
    // res.send(result)
  })
})

app.get('/find', (req, res) => {
  const sql = `SELECT nama FROM pesanan WHERE telp = ${req.query.telp}`
  db.query(sql, (error, result) => {
    response(200, result, "find order name", res)
  })
  // console.log('find telp: ', req.query.telp)
  // res.send('Hello Bung')
  // console.log({ urlParam: req.query.name })
})


app.post('/login', (req, res) => {
  console.log({ requestFromOutside:req.body })
  res.send("login berhasil")
  // }
})

app.put(`/username`, (req, res) => {
  console.log({ updateDate: req.body })
  res.send('update berhasil')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


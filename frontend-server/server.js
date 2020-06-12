const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname)))
app.listen(1234,()=>{
    console.log('success! http://localhost:1234')
})
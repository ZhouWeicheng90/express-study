const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('E:\\MGh\\express-study\\frontend-server'))
app.listen(1234,()=>{
    console.log('success! http://localhost:1234')
})
const express=require('express')
const mongoose=require('./database/database')
const User=require('./model/model')
const cors=require('cors')

const app=express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',require('./router/router'))


app.listen(3001,()=>{
    console.log("server is running....")
})
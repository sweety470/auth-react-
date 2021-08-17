const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mern2',{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection succesfull")
}).catch((e)=>{
    console.log("no connection")
})
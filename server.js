
const dotenv=require('dotenv')
const express=require('express')
//at there app is a rest object
const app=express(); // at there we add the express functionality in app object
const morgan=require('morgan');  // morgan is a middleware which is used for track incoming request like URL.status code,response time
const connectDb = require('./config/db');
const authRoutes=require('./routes/authRoutes.js')
const cors=require('cors')
const categoryRoutes=require('./routes/categoryRoutes.js')
const productRoutes=require('./routes/productRoutes.js')
//configure env
dotenv .config();  // it is used to load the environment variable from your .env file into your node.js application



//database config
connectDb();
//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/products',productRoutes)
//rest api
app.get('/',(req,res)=>{
    res.send({
        message:"welcome to ecommerce website"
    })
})

//app.use('/api/v1/products',productRoutes)
const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})
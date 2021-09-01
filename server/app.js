require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');

//My routes
const authRoutes = require("./routers/auth")
const userRoutes = require("./routers/user")
const categoryRoutes = require("./routers/category")
const productRoutes = require("./routers/product")
const orderRoutes = require("./routers/order")
const paymentBRoutes = require("./routers/payment")

//DB CONNECTION
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED")
}).catch(()=>{
    console.log("DB got oops")
});

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(cors());

//MY ROUTES
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",paymentBRoutes);

//PORT
const port = process.env.PORT || 8000;

//STARTING A SERVER
app.listen(port,()=>{
    console.log(`App is running at ${port}`);
});
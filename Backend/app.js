let express=require("express");
let app=express();
let cors=require("cors");
let dbConfig=require("./config/dbConfig");
let loginRouter=require("./router/loginRouter")
let customerRouter=require("./router/customerRouter")
let accountRouter=require("./router/accountRouter")
let categoryRouter=require("./router/categoryRouter")
let productRouter=require("./router/productRouter")
let orderRouter=require("./router/orderRouter")

dbConfig.dbConnection;

dbConfig.adminAccount();

app.use(express.json());
app.use(cors());

app.use("/api/login",loginRouter);
app.use("/api/customer",customerRouter)
app.use("/api/account",accountRouter)
app.use("/api/category",categoryRouter)
app.use("/api/product",productRouter)
app.use("/api/order",orderRouter)
app.listen(3000,()=>console.log("server running on port number 3000"));
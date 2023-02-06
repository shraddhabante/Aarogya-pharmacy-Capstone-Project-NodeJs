let express=require("express");
let app=express();
let cors=require("cors");
let dbConfig=require("./config/dbConfig");
let loginRouter=require("./router/loginRouter")

dbConfig.dbConnection;

app.use(express.json());
app.use(cors());

app.use("/api/login",loginRouter);


app.listen(3000,()=>console.log("server running on port number 3000"));
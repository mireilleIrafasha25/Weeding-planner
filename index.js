import express from 'express';
import mongoose from 'mongoose';
import router from './route/index.js';
import errorHandler from './middleware/errorhandler.js';
import dotenv from 'dotenv';
import documentation from "./doc/swagger.json" assert{type:"json"};
import swaggerUi from "swagger-ui-express"


dotenv.config()



const app = express();
app.use(express.json());
app.use("/api_docs",swaggerUi.serve, swaggerUi.setup(documentation))
app.use('/Wedding',router);
mongoose.connect(`${process.env.db}`)
.then(()=>
{
    console.log('connected to db');
})
.catch(err=>
    {
        console.log(err);
    }
)
app.listen(process.env.PORT,()=>
{
    console.log(`server is running on port ${process.env.PORT}`);
})
app.use(errorHandler)
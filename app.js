import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(arcjetMiddleware)

// means signup route daka vellali ante first api/v1/auth ki piovali
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);
app.use('api/v1/workflow',workflowRouter)
app.use(errorMiddleware);
app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(PORT,async()=>{
    console.log(`server is running on port ${PORT}`);
    await connectToDatabase()
})

export default app;
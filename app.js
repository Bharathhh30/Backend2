import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(arcjetMiddleware)

// means signup route daka vellali ante first api/v1/auth ki piovali
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscription',subscriptionRouter);
app.use(errorMiddleware);
app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(PORT,async()=>{
    console.log(`server is running on port ${PORT}`);
    await connectToDatabase()
})

export default app;
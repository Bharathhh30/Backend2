import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

// means signup route daka vellali ante first api/v1/auth ki piovali
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/subscription',subscriptionRouter);

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(PORT,async()=>{
    console.log(`server is running on port ${PORT}`);
    await connectToDatabase()
})

export default app;
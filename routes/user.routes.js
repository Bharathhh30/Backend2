import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=>{
     res.send({
            title: ' GET All users'
     })
})

// /:id - user by id
userRouter.get('/:id',(req,res)=>{
    res.send({
           title: ' GET  users detials'
    })
})



userRouter.post('/',(req,res)=>{
    res.send({
           title: ' CREATE new users'
    })
})


userRouter.put('/:id',(req,res)=>{
    res.send({
           title: ' UPDATE users'
    })
})

userRouter.delete('/:id',(req,res)=>{
    res.send({
           title: ' DELETE users'
    })
})

export default userRouter;
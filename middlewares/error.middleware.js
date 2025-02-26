const errorMiddleware = (err,req,res,next) => {
    
    try {
        let error = { ...err}

        error.message = err.message
        console.error(err)

        // type of error
        if(err.name === 'CastError'){
            const message = 'Resource not found'
            error = new ErrorResponse(message)
            error.statusCode = 404
        }
        // mongoose duplicate key error 11000
        if(err.code === 11000){
            const message = `Duplicate field value entered`
            error = new ErrorResponse(message)
            error.statusCode = 400
        }
        // mongoose validation error
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message)
            error = new Error(message.join(', '))
            error = new ErrorResponse(message,400)
        }

        res.status(error.statusCode || 500).json({
            success : false,
            error : error.message || 'Server Error'
        })

    } catch (error) {
        next(error)
    }
}

export default errorMiddleware
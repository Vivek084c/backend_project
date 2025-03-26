const asyncHandler = (requestHandler) => {
    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}

export {asyncHandler}

// code to handle async call using functions
// const asyncHandler = (fn) => async (req, res, mext) => {
//     try{
//         await fn(req, res, next)
//     }
//     catch (error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//     })
//     }
// }
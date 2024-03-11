
import express from "express";
const app=express();

enum ResponseStatus{
    Success=200,
    NotFound=404,
    Error=500
}

app.get("/",(req,res)=>{
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).json
        ({msg:"User Id Not Found"})
    }
})

// enum Direction{
//     Up="up",
//     Left="left",
//     Right="right",
//     Down="down"
// }

// function doSomething(keyPressed:Direction){
//     if(keyPressed===Direction.Up){
//         console.log("Move Up");
//     }
//     if(keyPressed===Direction.Left){
//         console.log("Move Left");
//     }
//     if(keyPressed===Direction.Right){
//         console.log(Direction.Right);
//     }
//     if(keyPressed===Direction.Down){
//         console.log(Direction.Down);
//     }
    
// }
// doSomething(Direction.Down);
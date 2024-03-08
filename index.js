//write basic express boilerplate code.
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express()

app.use(express.json)

// body: {
//     title:String;
//     description: String
// }

app.post("/todo",function(req,res) {
    const createPayload = req.body;
    const parsepayload = createTodo.safeParse(createPayload);
    if (!parsepayload){
        res.status(411).json({
            msg: "You set the wrong inputs"
        })
        return;
    }


})

app.get("/todo",function(req,res){

})

app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const parsepayload = updateTodo.safeParse(updatePayload);

    if(!parsepayload){
        res.status(411).json({
            msg: "your input is wrong",
        })
        return;
    }
})
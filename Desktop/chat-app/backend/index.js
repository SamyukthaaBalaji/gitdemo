
const app=require("express")();
const server=require("http").createServer(app);
const io=require('socket.io')  (server,{cors:{origin:"*",methods:["GET","POST"],allowedHeaders:["my-custom-headers"],Credentials:true}})
io.on("connection",(socket)=>{
    console.log("connected");
    socket.on("chat",(payload)=>{
        console.log("chat",payload);
        io.emit("chat",payload)

    })

})
server.listen(5000,()=>console.log("listnening"))

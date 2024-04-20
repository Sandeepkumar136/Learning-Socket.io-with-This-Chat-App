const http=require("http")

const express=require("express");

const { Server } = require("socket.io");

const path=require("path");


const exp = require("constants");

const app=express();

const server=http.createServer(app);


const io= new Server(server);

io.on("connection", (socket)=>{
    console.log("A new user connected", socket.id);
})

app.use(express.static(path.resolve("./public")));

app.get("/",(req, res)=>{
    return res.sendFile("./public/index.html");
})

server.listen(9000, ()=>console.log("Server Started at port 9000"));

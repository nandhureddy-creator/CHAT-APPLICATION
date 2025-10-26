const express=require('express');
const app=express();
const http = require('http');
const server = http.createServer(app);
const {Server}=require('socket.io');
const io=new Server(server);
const port=process.env.PORT || 3000;

app.use('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

// io.on('connection',(socket)=>{
//     console.log("Server connected");
//     socket.on('disconnect',()=>{
//         console.log("Server Disconnected");
//     })
// })

// io.on('connection',(socket)=>{
//     socket.on('chat message',(msg)=>{
//         console.log(`Message : ${msg}`);
//     })
// })

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


server.listen(port,()=>{
    console.log("Server is listening");
})
const net = require('net')


const connect = net.createConnection({
    port:8080,
    host:'localhost'
});

connect.on('data', (data)=>{
    console.log(`You recieved a message: ${data}`)
})
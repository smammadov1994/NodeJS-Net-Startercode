// two modules for netoworking: http or net//

const net = require('net')
const http = require('http')

const server = net.createServer()




server.listen({
    port:8080,
    host:'localhost'
})

const connectedClients=[]

server.on('connection', (client)=>{
    console.log('Client has connected')
    connectedClients.push(client)
})

setInterval(()=>{
    const now = new Date().toISOString()
    connectedClients.forEach(client=>{
        client.write(now)
    })
}, 15000)
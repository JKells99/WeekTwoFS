const http = require('http')
const port = 3000;


const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.end('Hello Keyin!')
})

server.listen(port,()=> console.log(`Server started on port ${port};` + `Press ctrl-c to terminate`))
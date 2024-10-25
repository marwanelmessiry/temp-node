const http=require('http');
const server = http.createServer((req,res)=>{
    res.write('welcome to home page')
    res.end()
}

)
server.listen(4000)
console.log('server is running on port 4000 ');

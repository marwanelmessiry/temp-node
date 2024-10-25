const {readFile,writeFile}=require('fs')
readFile('./content/sub/res.txt','utf8',(err,res)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(res);
    
})
// const first = readFileSync('./content/sub/first.txt','utf-8')
// const second = readFileSync('./content/sub/second.txt','utf-8')

// writeFileSync ('./content/sub/res.txt',`the mix is : ${first}, ${second}`,'utf-8')
import express from 'express'

const app = express();

app.get('/',(req,res)=> {
    res.send("<H1>Hello, Express!!<H1>");
})

app.listen(8000,()=> {
    console.log("서버 실행중");
    
})
import express from 'express'
import mysql from 'mysql2'

const app = express();
const PORT = 8000;

app.use(express.json()); // JSON 요청 처리
app.use(express.urlencoded({ extended: true })); // 폼 요청 처리

app.get('/',(req,res) =>{
    res.send("<h1>API 서버와 DB 연동</h1>")
})

app.post("/api/products",(req,res) =>{
    const {productName, price} = req.body; //요청한 속성
    const sql = "INSERT INTO product(product_name, price) VALUES(?, ?)"
    db.query(sql, [productName,price], (err,results)=> {
            if(err){
            console.log("상품 등록 오류", err);
            res.send("상품 등록 중 오류 발생");
            return;
        } res.send("상품 등록에 성공했습니다")
    });
})

const db = mysql.createConnection({
    host:"localhost",
    user:"jsuser",
    password:"Bd1475869!",
    database:"jsdb"
});

// mysql 연결
db.connect((err)=>{
    if(err){
        console.error("DB 연결 오류", err)
        return;
    }
    console.log("데이터 베이스에 연결 했습니다.")
});

//상품 목록 조회
//db.query(sql, 데이터, 콜백함수)
app.get("/api/products",(req,res) =>{
    const sql = "SELECT * FROM product";
    db.query(sql, (err, results) => {
        if(err){
            console.log("상품 조회 오류", err);
            res.send("상품 조회 중 오류 발생");
            return;
        }
        res.json(results);
    })
})

app.listen(PORT,()=> {
    console.log(`http://localhost:${PORT}에서 서버 실행중...`);
    
})
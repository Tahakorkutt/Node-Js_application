import express from 'express';

const app = express();

const port = 4000
app.get("/",(req,res) => {
    res.send("INDEX SAYFASI 2")
})

app.listen(port, ()=>{
    console.log(`appplication running on port : ${port}`);
})
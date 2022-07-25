import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res)=>{
    return res.send("Configuração Inicial do Projeto");
})

app.listen(port, ()=>{
    console.log(`Server iniciado na porta ${port}. Acesse via: http://localhost:${port}`)
})
// Importação do Express e das Rotas
import express from "express";
import userRouter from "./routes/users.routes";
import {loginRouter} from "./routes/login.routes";

//Configuração do App usando Express e Middleware
const app = express();
app.use(express.json());

//Declaração da Porta
const port = 3000;

//Configuração das Rotas
app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(
    `Server iniciado na porta ${port}. Acesse via: http://localhost:${port}`
  );
});

export default app;
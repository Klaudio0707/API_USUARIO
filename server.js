import express, { request } from "express"

const app = express()

app.use(express.json()); // para o express usar o json

const users = []

app.get("/usuarios", (req, res) => {
res.send("ok, deu certo!!")
res.json(users)
});

app.post("/usuarios", (req, res) => {
users.push(req.body)

res.send("Aqui deu certo");

});

app.listen(3000)

/*
1 tipo de rota / metodo http
2 endereço

Criar nossa API  de usuários
listar toodos os usuarios
editar usuarios
deletar um usuário
*/
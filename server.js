import express from "express"
import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()

const app = express()
app.use(express.json()); // para o express usar o json



app.get("/usuarios", async (req, res) => {
const user = await prisma.user.findMany()
res.status(200).json(user)
});


app.post("/usuarios", async (req, res) => {
await prisma.user.create({
data: {
email: req.body.email,
name: req.body.name,
age: req.body.age
}

});

res.status(201).json(req.body)
});
app.get("/usuarios", async (req, res) => {
    const user = await prisma.user.findMany()
    res.status(200).json(user)
    });
    
    
    app.post("/usuarios", async (req, res) => {
    await prisma.user.create({
    data: {
    email: req.body.email,
    name: req.body.name,
    age: req.body.age
    }
    
    });
    
    res.status(201).json(req.body)
    });
app.listen(3000)

/*
1 tipo de rota / metodo http
2 endereço

Criar nossa API  de usuários
listar toodos os usuarios
editar usuarios
deletar um usuário
user claudioroberto0707
senha eIQJI67sFzhZUvMQ
*/
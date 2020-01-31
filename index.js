const express = require("express");

const server = express();

server.use(express.json());

const users = ["Roger", "Suelen", "Violeta", "Matilda", "Lavínia"];

server.use((req, res, next) => {
  console.time("Request");
  console.log("A Requisição foi chamada!");
  console.log(`Método: ${req.method}`);
  console.log(`URL: ${req.url}`);
  next();
  console.log("Finalizou!");
  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ message: "User name is required" });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  if (!users[req.params.id]) {
    return res.status(400).json({ message: "User does not exists" });
  }
}

server.get("/users", (req, res) => {
  return res.json({ Users: users });
});

server.get("/users/:id", checkUserInArray, (req, res) => {
  const { id } = req.params;

  return res.json({ Nome: users[id] });
});

server.post("/users", checkUserExists, (req, res) => {
  const { nome } = req.body;

  users.push(nome);

  return res.json({ Users: users });
});

server.put("/users/:id", checkUserExists, checkUserInArray, (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  users[id] = nome;

  return res.json({ Users: users });
});

server.delete("/users/:id", checkUserInArray, (req, res) => {
  const { id } = req.params;

  users.splice(id, 1);

  return res.json({ Users: users });
});

server.listen(3000);

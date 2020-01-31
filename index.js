const express = require("express");

const server = express();

server.use(express.json());

const users = ["Roger", "Suelen", "Violeta", "Matilda", "Lavínia"];

server.get("/users", (req, res) => {
  return res.json({ Users: users });
});

server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  return res.json({ Nome: users[id] });
});

server.post("/users", (req, res) => {
  const { nome } = req.body;

  users.push(nome);

  return res.json({ Users: users });
});

server.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  users[id] = nome;

  return res.json({ Users: users });
});

server.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  users.splice(id, 1);

  return res.json({ Users: users });
});

server.listen(3000);

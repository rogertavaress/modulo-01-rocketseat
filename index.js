const express = require("express");

const server = express();

// http://localhost:3000/teste/1
server.get("/teste/:id", (req, res) => {
  const { id } = req.params;

  return res.json({ message: `Olá Mundo de ${id}!` });
});

// http://localhost:3000/teste?id=1
server.get("/teste", (req, res) => {
  const { id } = req.query;

  return res.json({ message: `Olá Mundo de ${id}!` });
});

server.listen(3000);

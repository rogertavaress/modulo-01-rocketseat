const express = require("express");

const server = express();

const users = ["Roger", "Suelen", "Violeta", "Matilda", "Lavínia"];

server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  return res.json({ Nome: users[id] });
});

server.listen(3000);

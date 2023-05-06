const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
// middleWare
app.use(cors());
app.use(express.json());
const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Shabnor", email: "sabanOr@gmail.com" },
  { id: 3, name: "Sabela", email: "sabela@gmail.com" },
  { id: 4, name: "Jabela", email: "jabila@gmail.com" },
];
app.get("/", (req, res) => {
  res.send("User Management Server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});
app.listen(port, () => {
  console.log(`Server is Running on PORT: ${port}`);
});

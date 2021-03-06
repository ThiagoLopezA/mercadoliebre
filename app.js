const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

app.listen(process.env.PORT || 3030, () =>
  console.log("Web levantada con exito en el puerto 3030")
);
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

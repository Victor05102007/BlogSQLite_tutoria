const express = require("express"); //importa lib express
const sqlite3 = require("sqlite3"); //importa lib sqlite3

const PORT = 8000; //porta tcp do servidor

const app = express();

const db = new sqlite3.Database("usar.db"); //uso do banco de dados
db.serialize(() => {
  //este método permite enviar comandos SQL em modo 'sequencial'
  db.run(
    "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

const index =
  "<a href='/'>Home</a> <a href='/sobre'>Sobre</a> <a href='/cadastro'>Cadastro</a> <a href='/login'>Login</a>";
const sobre = 'Vc está na página "sobre"<br><a href="/">Voltar</a>';
const login = 'Vc está na página "login"<br><a href="/">voltar</a>';
const cadastro = 'Vc está na página "cadastro"<br><a href="/">voltar</a>';
//metodo express.get necessita de dois parâmetros
//Na ARROW FUNCTION, O primeiro são os dados do servidor (REQUISITION)
// O SEGUNDO, SÃO OS DADOS PROCESSADOS ENVIADOS AO CLIENT (RESULT - 'res)
app.get("/", (req, res) => {
  res.send(index);
});

app.get("/home", (req, res) => {
  res.send(home);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/cadastro", (req, res) => {
  res.send(cadastro);
});

app.get("/login", (req, res) => {
  res.send(login);
});

//app.çisten() deve ser o ultimo comando da aplicação
app.listen(PORT, () => {
  console.log(`servidor esta sendo executado na porta ${PORT}!`);
});

const express = require("express");

const PORT = 8000; //porta tcp do servidor

const app = express();

const index = "<a href='/sobre'>Sobre</a><a href='/info'>Info</a>";
const sobre = 'Vc está na página "sobre"<br><a href="/">Voltar</a>';
const info = 'Vc está na página "info"<br><a href="/">Voltar</a>';

//metodo express.get necessita de dois parâmetros
//Na ARROW FUNCTION, O primeiro são os dados do servidor (REQUISITION)
// O SEGUNDO, SÃO OS DADOS PROCESSADOS ENVIADOS AO CLIENT (RESULT - 'res)
app.get("/", (req, res) => {
  res.send(index);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/endereco", (req, res) => {
  res.send("vc esta na pagina endereço");
});

app.get("/info", (req, res) => {
  res.send(info);
});

//app.çisten() deve ser o ultimo comando da aplicação
app.listen(PORT, () => {
  console.log(`servidor esta sendo executado na porta ${PORT}!`);
});

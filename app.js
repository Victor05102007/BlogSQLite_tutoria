const express = require("express");

const PORT = 8000; //porta tcp do servidor

const app = express();

//metodo express.get necessita de dois parâmetros
//Na ARROW FUNCTION, O primeiro são os dados do servidor (REQUISITION)
// O SEGUNDO, SÃO OS DADOS PROCESSADOS ENVIADOS AO CLIENT (RESULT - 'res)
app.get("/", (req, res) => {
  res.send("olá sesi!");
});

app.get("/sobre", (req, res) => {
  res.send("vc esta na pagina sobre");
});

app.get("/endereco", (req, res) => {
  res.send("vc esta na pagina endereço");
});

app.get("/info", (req, res) => {
  res.send("venha cá meu peixe q eu vou lhe ensinar");
});

//app.çisten() deve ser o ultimo comando da aplicação
app.listen(PORT, () => {
  console.log(`servidor esta sendo executado na porta ${PORT}!`);
});

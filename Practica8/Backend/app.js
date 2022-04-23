const express = require('express')
var cors = require('cors');
var app = express();
app.use(cors());
const port = 3000
var contador=0;
app.get('/', (req, res) => {

    respuesta='veces consumido: '+contador;
  res.send(respuesta)
})

app.post('/', (req, res) => {
    contador++;
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
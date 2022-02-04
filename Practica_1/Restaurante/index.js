
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require("cors");
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,// For legacy browser support
  methods: "GET, PUT, POST, DELETE, UPDATE"
}
// create express app
const app = express();
// Setup server port
const port = 6000;
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Restaurante");
});

require("./routes/pedidos.route")(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
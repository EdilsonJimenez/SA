const { verify } = require("../middlewares/auth.middleware");
const { recibirPedido, entregarPedido, obtenerPedido } = require("../controllers/repartidor.controller");

module.exports = (app) => {
    app.post("/recibir", verify, recibirPedido);
    app.get("/pedido/:id", verify, obtenerPedido);
    app.put("/entregar", verify, entregarPedido);
}
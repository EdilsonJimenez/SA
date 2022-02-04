const { verify } = require("../middlewares/auth.middleware");
const { crearPedido, obtenerPedido, enviarPedido, actualizarEstado} = require("../controllers/pedidos.controller");

module.exports = (app) => {
    app.post("/pedido", verify, crearPedido);
    app.get("/pedido/:id", verify, obtenerPedido);
    app.post("/enviar", verify, enviarPedido);
    app.put('/pedido/:id', verify, actualizarEstado)
}
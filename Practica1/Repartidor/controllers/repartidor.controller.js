const axios = require('axios');

//Pedidos a ser entregados
var pedidos = {};

//Estados
const PENDIENTE = 0;
const PREPARANDO = 1;
const LISTO = 2;
const ENVIADO = 3;
const ENTREGRADO = 4;

module.exports.recibirPedido = (req, res) => {

    if (req.user.rol === 2 || req.user.rol === 3) {

        var pedido = req.body.pedido;

        var repartidor = req.body.repartidor;

        pedidos[pedido] = repartidor;

        return res.send({
            mensaje: "Pedido recibido exitosamente",
        })
    } else {
        return res.status(400).send({
            mensaje: "No tiene acceso a este servicio"
        })
    }
}

module.exports.obtenerPedido = async (req, res) => {
    if (req.user.rol === 1 || req.user.rol === 3) {
        const id = req.params.id;
        var pedido = pedidos[id];

        if (pedido) {
            const result = await axios.get("http://localhost:6000/pedido/" + id);

            if (result) {
                return res.send({ mensaje: "Pedido obtenido exitosamente", pedido: result.data.pedido });
            } else {
                return res.status(500).send({
                    mensaje: "Ocurrio un error cambiar el estado del pedido"
                });
            }
        }

        return res.status(404).send({
            mensaje: "No se ha enviado un pedido con id " + id
        })
    } else {
        return res.status(400).send({
            mensaje: "No tiene acceso a este servicio"
        })
    }
}

module.exports.entregarPedido = async (req, res) => {
    if (req.user.rol !== 3)
        return res.status(400).send({
            mensaje: "No tiene acceso a este servicio"
        })
    const id = req.body.pedido;
    //consumir servicio recibir pedido del restaurante
    const pedido = pedidos[id];

    if (pedido) {
        const result = await axios.put("http://localhost:6000/pedido/" + id, { estado: ENTREGRADO });

        if (result) {
            delete pedidos[id]
            return res.send({ mensaje: "Pedido marcado como entregado" });
        } else {
            return res.status(500).send({
                mensaje: "Ocurrio un error cambiar el estado del pedido"
            });
        }

    } else {
        return res.status(404).send({
            mensaje: "No se ha enviado un pedido con id " + id
        })
    }
}
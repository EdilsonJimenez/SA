const { v4: uuid } = require("uuid");
const axios = require('axios');

var pedidos = {};

//Estados
const PENDIENTE = 0;
const PREPARANDO = 1;
const LISTO = 2;
const ENVIADO = 3;
const ENTREGRADO = 4;

module.exports.crearPedido = (req, res) => {
    //validar rol
    if (req.user.rol === 1 || req.user.rol === 2) {

        var pedido = req.body;
        pedido.estado = PENDIENTE;

        const id = uuid();

        pedidos[id] = pedido;

        return res.send({
            mensaje: "Pedido creado exitosamente",
            orden: id
        })
    } else {
        return res.status(400).send({
            mensaje: "No tiene acceso a este servicio"
        })
    }

}

module.exports.obtenerPedido = (req, res) => {
    const id = req.params.id;
    var pedido = pedidos[id];

    if (pedido) {
        return res.send({
            mensaje: "Pedido encontrado.",
            pedido
        })
    }

    return res.status(404).send({
        mensaje: "No existe pedido con id " + id
    })
}

module.exports.enviarPedido = async (req, res) => {
    if (req.user.rol !== 2)
        return res.status(400).send({
            mensaje: "No tiene acceso a este servicio"
        })

    const repartidor = req.body.repartidor;
    const id = req.body.pedido;

    //consumir servicio recibir pedido del restaurante
    const pedido = pedidos[id];

    if (pedido) {
        const result = await axios.post("http://localhost:7000/recibir", { repartidor, pedido: id }, {
            headers: {
                "auth-token": req.headers["auth-token"]
            }
        });

        if (result) {
            pedidos[id].estado = ENVIADO;

            return res.send({ mensaje: "Pedido asignado a repartidor" });
        } else {
            return res.status(500).send({
                mensaje: "Ocurrio un error al enviar el pedido"
            });
        }

    } else {
        return res.status(404).send({
            mensaje: "No existe pedido con id " + id
        })
    }
}

module.exports.actualizarEstado = (req, res) => {
    if (req.user.rol === 2 || req.user.rol === 3) {

        const id = req.params.id;

        if (pedidos[id]) {
            if (isNaN(+req.body.estado)) return res.status(400).send({ mensaje: "El estado debe ser numerico" });
            pedidos[id].estado = +req.body.estado;

            return res.send({ mensaje: "Estado actualizado correctamente" });
        } else {
            return res.status(404).send({
                mensaje: "No existe pedido con id " + id
            })
        }
    } else {
        return res.status(400).send({
            mensaje: "No tiene acceso a este servicio"
        })
    }
}
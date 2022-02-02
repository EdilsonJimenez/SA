
const router = require('express').Router();
const axios = require('axios');


router.post('/', (req, res) => {

  if (req.user) {
    if (req.user.rol == 1) {
      let pedido = req.body;
      const token = req.header('auth-token')

      // Make a request for a user with a given ID
      let config = {
        headers: {
          "auth-token": token,
        }
      }
      
      axios.post('http://localhost:6000/pedido',pedido,config)
        .then(function (response) {
          res.send(response.data)
        })
        .catch(function (error) {
          // handle error
          res.send(error)
        })
      return;
    }
    res.json({
      error: null,
      data: {
        title: 'Acceso denegado',
        user: req.user
      }
    })
  }



})

router.get('/pedido_res', (req, res) => {

  if (req.user) {
    if (req.user.rol == 1) {
      const token = req.header('auth-token')

      // Make a request for a user with a given ID
      let config = {
        headers: {
          "auth-token": token,
        }
      }
      const id_pedido= encodeURI(req.query.id)

      axios.get('http://localhost:6000/pedido/'+id_pedido,config)
        .then(function (response) {
          response
          res.send(response.data)
        })
        .catch(function (error) {
          // handle error
          res.send(error)
        })
      return;
    }
    res.json({
      error: null,
      data: {
        title: 'Acceso denegado',
        user: req.user
      }
    })
  }



})

router.get('/pedido_rep', (req, res) => {
  if (req.user) {
    if (req.user.rol == 1) {
      const token = req.header('auth-token')

      // Make a request for a user with a given ID
      let config = {
        headers: {
          "auth-token": token,
        }
      }
      const id_pedido= encodeURI(req.query.id)

      axios.get('http://localhost:7000/pedido/'+id_pedido,config)
        .then(function (response) {
          response
          res.send(response.data)
        })
        .catch(function (error) {
          // handle error
          res.send(error)
        })
      return;
    }
    res.json({
      error: null,
      data: {
        title: 'Acceso denegado',
        user: req.user
      }
    })
  }



})
module.exports = router
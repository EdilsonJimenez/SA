

const jwt = require('jsonwebtoken');
const users = new Map();
users.set('wjosuep13', { password: '123', rol: 1 });//cliente
users.set('edsilon', { password: '123', rol: 2 });//pos el otro
users.set('repartidor', { password: '123', rol: 3 });//repartidor

exports.login = function (req, res) {

  let user = req.body;
  let registeruser = users.get(user.username);
  if (registeruser) {
    if (registeruser.password === user.password) {
      const token = jwt.sign({
        name: user.username,
        rol: registeruser.rol
      }, process.env.TOKEN_SECRET)

      res.header('auth-token', token).json({
        error: null,
        data: { token }
      })

    } else {

      res.json({
        error: 'Error al logearse',
        data: null
      })
    }
  }

};






const router = require('express').Router();

router.post('/', (req, res) => {

if(req.user){
  if(req.user.rol==1){
    res.json({
      error: null,
      data: {
          title: 'pedido exitoso',
          user: req.user
      }
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
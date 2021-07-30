const {response} = require('express')

const usuarioGet = (req, res =response)=>{
  res.json({
    msg:'get Apiss'

  })
}

const usuarioPost = (req, res =response)=>{

  const body = req.body;

  res.json({
    msg:'get Apiss',
    body
  })
}

module.exports = {
  usuarioGet,
  usuarioPost
}


const { response, request } = require("express");


const usuariosGet = (req = request, res = response) => {


  const  { q, nombre = 'No name', apikey , page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    }) ;
  }

  const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
        
    });

  }

  const usuariosPut =  (req, res = response) => {

    const {id} = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });

  }
  const usuariosPatch =  (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
  }
  
  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
  }


  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
   

  }
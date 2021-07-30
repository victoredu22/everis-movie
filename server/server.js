const express = require('express')
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'

    //Conectar a base datos
    this.conectarDB();




    //middleware
    this.middlewares();

    this.routes();

  }
  async conectarDB(){
    

    await dbConection();
  }

  middlewares(){
    //cors
    this.app.use(cors());

    this.app.use(express.json());

  }

  routes(){
  
    this.app.use(this.usuariosPath, require('../routes/user'));

  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log('serv corriendo!', this.port);
    });
  }
}

module.exports = Server;
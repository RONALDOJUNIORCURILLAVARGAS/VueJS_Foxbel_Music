//Hacemos la configuracion para que accedamos
// a ttraves de un proxy y no nos rechaze la conexion CORS

module.exports = {  
  devServer: {
    proxy: 'https://api.deezer.com/'
  }
}
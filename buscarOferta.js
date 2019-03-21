const {ofertas} = require('./listaOfertas');

function buscarOferta (usuario) { 
  let datosObtenido;
  resultado =ofertas.find( (curso) => {
    if (curso.id === usuario) {
      datosObtenido = curso
    }
  })
  return datosObtenido;
}

module.exports = buscarOferta;
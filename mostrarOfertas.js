const {ofertas} = require('./listaOfertas');
const argv = require('./datosPersona');

let tiempoOferta = 0;

function tiempo(seg){
  ofertas.forEach( (element) => {    
    setTimeout( function(){
        console.log(element);       
    },2000 + seg);    
    seg += 2000;
  })   
}

function buscarCurso(){
  let resultado = true;
    ofertas.find( (cursos) => {
      if(argv.cursoid != cursos.id){
          resultado = false;
      }
    })

  if(!resultado){
    console.log(`El curso: { ${argv.cursoid} } No está en los cursos que se ofrecen en estos momentos.\n Lista de cursos Abiertos:`)
    tiempo();
  }
}

function mostrarOfertas () {
  !argv.cursoid ? tiempo(tiempoOferta) : buscarCurso();
}

module.exports = {
  mostrarOfertas: mostrarOfertas
};
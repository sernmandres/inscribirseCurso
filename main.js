const {mostrarOfertas} = require('./mostrarOfertas');
const argv = require('./datosPersona');
const buscarOferta = require('./buscarOferta');
const fs = require('fs');

let capturarDatos = buscarOferta(argv.cursoid);

if (capturarDatos) {
  let crearSolicitud = (datos) => {
    let ruta = `./inscripciones/curso-${datos.cursoid}/cedula ${datos.cedula}.text`;

    texto = `Datos de la persona para el curso:
    ----------------------------------
    Nombre: ${datos.nombre}
    Curso: ${datos.cursoid}
    Cédula: ${datos.cedula}`;

    fs.access(ruta, fs.constants.F_OK, (err) => {
      if (err) {
        fs.writeFile(ruta, texto, (err) =>{
            if (err) throw err;
            console.log(`Se realizó correctamente la preinscripción al curso de: ${datos.cursoid}`);
        })
      } else {
        console.log(`Ya estás registrado al curso de: ${datos.cursoid}`);   
      }
    })
  }    
  crearSolicitud(argv);
} else {
  mostrarOfertas();
}

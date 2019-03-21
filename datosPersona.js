let datosPersona = {
  cursoid: {
    default: undefined,
    demand: true
  },
  nombre: {
    default: undefined,
    demand: true
  },
  cedula: {
    default: undefined,
    demand: true
  }
}

const argv = require('yargs')
      .command('inscribir', 'Persona interesadas para la preinscripción a uno de los cursos', 
      datosPersona)
      .argv;

module.exports = argv;
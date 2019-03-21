const programas = [
  {
    id : 'nodejs',
    nombre: 'Curso Node.js',
    duración: '68 horas',
    costo: 0,
    descripcion: 'Node JS a visto un crecimiento exponencial en el desarrollo web en los últimos años gracias a su velocidad y fácilidad para aprenderlo.'
  },
  {
    id : 'piano',
    nombre: 'Clases de piano',
    duración: '20 horas',
    costo: 150000,
    descripcion: 'No es necesario tener ningún conocimiento musical previo. También es un curso interesante para músicos de otros instrumentos que se quieren iniciar en el piano o en el teclado.'
  },
  {
    id : 'seguridadInformatica',
    nombre: 'Seguridad Informática',
    duración: '68 horas',
    costo: 650000,
    descripcion: 'Programa diseñado para desarrollar habilidades y competencias necesarias en el ámbito de la ciberseguridad'
  }
]

module.exports = {
  ofertas: programas
};
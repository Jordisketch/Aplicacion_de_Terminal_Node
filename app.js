const { crearArchivo } = require('./helpers/multiplicar');
const  base  = require('./config/yargs')
const colors = require('colors/safe');


crearArchivo(base.b, base.l, base.h).then(nombreArchivo => console.log(colors.bgCyan(nombreArchivo))).catch(error => console.log(colors.black(error)));
const base = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number', 
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
}).option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Limite de multiplicar',
    default: 10
}).option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
}).check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser un numero';
    }
    
    if(isNaN(argv.h)){
        throw 'El limite debe ser un numero';
    }
    return true;
}).argv;


module.exports = base;
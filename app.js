

// requireds

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log("argv ", argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("Listar");
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log("Crear");
        crearArchivo(argv.base, argv.limite).then( archivo => console.log(`Archivo creado: ${ colors.green(archivo) } `))
        .catch( error => console.log(error));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}


/* let base = 7; */
/* console.log(module); */
/* console.log(process.argv); */

/* let argv2 = process.argv; */
/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

/* console.log('Base ', argv.base);
console.log('Limite ', argv.limite); */


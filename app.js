const argv = require('./config/yargs').argv;
const colors = require('colors')
const porHacer = require('./to-do/to-do');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        // console.log(tarea);
        break;
    case 'listar':

        let lista = porHacer.getListado();
        let suma = 1;
        for (let tareas of lista) {
            console.log(`Tarea por hacer ${suma++}:`.blue);
            console.log(`Descripcion: ${tareas.descripcion}`);
            console.log(`Completada: ${tareas.completado}\n`);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log('Comando no es reconocido.');
}
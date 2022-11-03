const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion por la tarea por hacer.'
    },
    completado: {
        alias: 'c',
        default: false

    },
}
const optsList = {
    descripcion: {
        alias: 'd',
        desc: 'Lista de las tareas.'
    }
}
const optsActua = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Actualizar el estado completado de una tarea.'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea.'
    },
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('listar', 'Lista del elemento pedido', optsList)
    .command('actualizar', 'Actualizar el estado completado de una tarea', optsActua)
    .help()
    .argv

module.exports = {
    argv
}
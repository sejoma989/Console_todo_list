require('colors');

const mostrarMenu = () => {
    console.clear();
    console.log('========================'.bgGreen.white);
    console.log('  Seleccione una opcion'.underline.green);
    console.log('======================== \n'.bgGreen.white);

    console.log(`${'1'.green}. Crear tarea`);
    console.log(`${'2'.green}. Listar tarea`);
    console.log(`${'3'.green}. Listar Tareas Completadas`);
    console.log(`${'4'.green}. Listar Tareas Pendientes`);
    console.log(`${'5'.green}. Compleatar tarea(s)`);
    console.log(`${'6'.green}. Borrar tarea`);
    console.log(`${'7'.green}. Salir\n`);




}

module.exports = mostrarMenu;
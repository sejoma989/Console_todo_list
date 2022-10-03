import ('colors');

import { inquirerMenu, pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';


console.clear();

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();


    console.log('Hola mundo!!');

    do {

        opt = await inquirerMenu();
        console.log({ opt });

        // const tarea = new Tarea('Tarea 1, comprar comida');
        // // console.log(tarea);
        // const tareas = new Tareas();
        // // console.log(tareas);

        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);

       


        await pausa();        
    }
    while( opt !== '0');
}

main();
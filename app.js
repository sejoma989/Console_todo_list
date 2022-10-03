import ('colors');

import { 
    inquirerMenu, 
    pausa,
    leerInput 
} from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';


console.clear();

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();


    console.log('Hola mundo!!');

    do {

        opt = await inquirerMenu();
        // console.log({ opt });

        // const tarea = new Tarea('Tarea 1, comprar comida');
        // const tareas = new Tareas();
        // // console.log(tareas);

        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);
        switch (opt) {
            
            case '1':
                // crear opcion                
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
                console.log('Tarea agregada: '.green, desc);
            break;

            case '2':
                console.log( tareas._listado );
            break;

        }

        await pausa();        
    }
    while( opt !== '0');
}

main();
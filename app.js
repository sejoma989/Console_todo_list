import ('colors');

// importar configuracion de peticiones por consola
import { 
    inquirerMenu, 
    pausa,
    leerInput 
} from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';


console.clear();

const main = async() => {
    
    //  inicializacion de variable que se captura
    let opt = '';

    // inicializacion de un objeto tareas para almacenar
    const tareas = new Tareas();

    do {

        // imprimir menu y almacenar respuesta de usuario
        opt = await inquirerMenu();

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
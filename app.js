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

        // case que evalua las opciones que recibe el usuario
        switch (opt) {
            
            case '1':
                // crear tarea                
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
                console.log('Tarea agregada: '.green, desc);
            break;

            case '2':
                // listar las tareas
                console.log( tareas.listado );
            break;

        }

        await pausa();        
    }
    while( opt !== '0');
}

main();
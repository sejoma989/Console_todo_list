import ('colors');

import { guardarDB, leerDB } from './helpers/interaccionDB.js';
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

    const tareasDB = leerDB();  

    if ( tareasDB ){
        // cargar tareas de BD
        tareas.cargarTareasFromArray(tareasDB);
    }

    // await pausa(); 

    do {

        // imprimir menu y almacenar respuesta de usuario
        opt = await inquirerMenu();

        // case que evalua las opciones que recibe el usuario
        switch (opt) {
            
            // crear tarea
            case '1':
                // leer descripcion del usuario
                const desc = await leerInput('Descripcion:');
                // llamado al metodo crear tarea y asignar la descripcion del usuario
                tareas.crearTarea( desc );
                console.log('Tarea agregada: '.green, desc);
            break;

            // listar las tareas
            case '2':
                // impresion por consola del array que recibe desde el listado
                console.log( tareas.listado );
            break;

        }

        // guardado en archivo que simula la bd
        guardarDB( tareas.listado );

        // promesa que espera la opcion del usuario
        await pausa();        
    }
    while( opt !== '0');
}

main();
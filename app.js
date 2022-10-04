import ('colors');

import { guardarDB, leerDB } from './helpers/interaccionDB.js';
// importar configuracion de peticiones por consola
import { 
    inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar, 
    confirmar
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
        console.log('\n ------ Creada por @sejoma989 -------'.green);

        // case que evalua las opciones que recibe el usuario
        switch (opt) {
            
            case '1':       // crear tarea
                // leer descripcion del usuario
                const desc = await leerInput('Descripcion:');
                // llamado al metodo crear tarea y asignar la descripcion del usuario
                tareas.crearTarea( desc );
                console.log('Tarea agregada: '.green, desc);
            break;

            
            case '2':       // listar las tareas
                // impresion por consola del array que recibe desde el listado
                tareas.listadoCompleto();
            break;

            
            case '3':       // listar tareas completadas
                tareas.listarPendientesCompletadas();
            break;

            
            case '4':       // listar tareas pendientes
                tareas.listarPendientesCompletadas(false);
            break;


            case '6':       // Borrar tareas

                const id = await listadoTareasBorrar(tareas.listado);

                // Validacion para cuando no se cancela el borrado
                if ( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?')                
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log(' Tarea borrada ')
                    }                
                }
                // console.log({ ok });
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
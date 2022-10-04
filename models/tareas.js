import { Tarea } from "./tarea.js";

/*
* Ejemplo del modelo de datos
* _Listado:
*      {'uuid-3324-324131-23423: {id:12, desc:asd, completadoEn:9340034 }' },
*      {'uuid-3324-324131-23424: {id:12, desc:asd, completadoEn:9340034 }' },
*      {'uuid-3324-324131-23425: {id:12, desc:asd, completadoEn:9340034 }' },
*/

class Tareas {

    _listado = {};

    
    constructor() {
        this._listado = {};
    }
    
    // getter para retornar un nuevo arreglo
    get listado(){
        // creacion del array que se va a entregar
        const listado = [];
        // extraccion de todas las llaves dentro de un arreglo usando el metodo keys de object
        // metodo keys devuelve un arreglo de strings
        // for each permite barrer todos los strings y usa la llave para identificar tarea
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push( tarea );
            // console.log(key);
        });

        return listado;
    }

    borrarTarea( id ='' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }
        
    }

    cargarTareasFromArray( tareas = [] ) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });

    }
    
    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto(){

        console.log();
        this.listado.forEach((tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });
    }

    listarPendientesCompletadas( completadas = true ){

        console.log();
        let contador = 0;
        this.listado.forEach((tarea) => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            if ( completadas ){
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn }`);
                }
            }
            else {
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        });
    }
}

export { Tareas };
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
            console.log(key);
        });

        return listado;
    }
    
    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

}

export { Tareas };
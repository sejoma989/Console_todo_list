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
    
    get listado(){
        // creacion del array que se va a entregar
        const listado = [];
        Object.keys(this._listado).forEach( key => {
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
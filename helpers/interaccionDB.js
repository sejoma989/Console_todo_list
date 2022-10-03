import fs from 'fs';

// inicializacion del path archivo que usan varios metodos
const archivo = './db/data.json';

const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerDB = () => {

    if ( !fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync( archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info );

    // console.log( data );

    return data;
}

export { guardarDB, leerDB };




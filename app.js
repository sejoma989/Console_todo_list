import ('colors');

import { inquirerMenu } from './helpers/inquirer.js';
// const {mostrarMenu, pausa} = import ('./helpers/mensajes');

console.clear();



const main = async() => {
    
    let opt = '';
    // console.log('Hola mundo!!');

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        
        // if ( opt !== '0') await pausa();
    }
    while( opt !== '0');
}

main();
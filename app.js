import ('colors');

import { inquirerMenu, pausa } from './helpers/inquirer.js';
// const {mostrarMenu, pausa} = import ('./helpers/mensajes');

console.clear();



const main = async() => {
    
    let opt = '';
    // console.log('Hola mundo!!');

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        
        await pausa();
        
    }
    while( opt !== '0');
}

main();
import inquirer from 'inquirer';
import 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['1. Crear lista', 'opt2', 'opt3']

    }
]

const inquirerMenu = async() => {

    // console.clear();
    console.log('========================'.bgGreen.white);
    console.log('  Seleccione una opcion'.underline.green);
    console.log('======================== \n'.bgGreen.white);

    const opt = await inquirer.prompt(preguntas);

    return opt;
}

export { inquirerMenu };

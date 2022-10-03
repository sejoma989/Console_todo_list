import inquirer from 'inquirer';
import 'colors';


const inquirerMenu = async() => {

    const questions = [
        {
            type: 'list',
            name: 'opcion',
            message: '¿Qué desea hacer?',
            choices: [
                {
                    value: '1',
                    name: '1. Crear tarea'
                },
                {
                    value: '2',
                    name: '2. Listar tareas'
                },
                {
                    value: '3',
                    name: '3. Listar Tareas Completadas'
                },
                {
                    value: '4',
                    name: '4. Listar Tareas Pendientes'
                },
                {
                    value: '5',
                    name: '5. Compleatar tarea(s)'
                },
                {
                    value: '6',
                    name: '6. Borrar tarea'
                },
                {
                    value: '0',
                    name: '0. Salir'
                },
            ]
        }
    ]

    console.clear();
    console.log('========================'.bgGreen.white);
    console.log('  Seleccione una opcion'.underline.green);
    console.log('======================== \n'.bgGreen.white);

    const { opcion } = await inquirer.prompt(questions);

    return opcion;
}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${ 'ENTER'.green } para continuar\n`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question)

}

const leerInput = async( message ) => {

    const question = [
        {
            type:'input',
            name:'desc',
            message,       // mensaje: message
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;

}

export { inquirerMenu, pausa, leerInput };

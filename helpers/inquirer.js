const inquirer = require("inquirer");
require("colors");

const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea hacer?',
        choices:[
            {
                value:'1',
                name:`${"1.".blue} Crear una tarea`
            },
            {
                value:'2',
                name:`${"2.".blue} Listar tareas`
            },
            {
                value:'3',
                name:`${"3.".blue} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${"4.".blue} Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${"5.".blue} Completar tarea(s)`
            },
            {
                value:'6',
                name:`${"6.".blue} Borrar tarea`
            },
            {
                value:'0',
                name:`${"0.".blue} Salir`
            }
        ]
    }
];

const preguntaPausa = [
    {
        type:'input',
        name:'pausa',
        message:`Presione ${"ENTER".blue} para continuar`
    }
];

const inquirerMenu = async() => {
    try{
        console.clear();
    
        console.log("=====================".blue);
        console.log("Seleccione una opción".blue);
        console.log("=====================\n".blue);
    
        const {opcion} = await inquirer.prompt(preguntas);
    
        return opcion;
    }catch(e){
        throw new Error("Algo salio mal!");
    }

}

const pausa = async() => {
    try {
        
        const valor = await inquirer.prompt(preguntaPausa);
        console.log(valor);

        return valor;

    } catch (error) {
        throw new Error("Ha ocurrido un error!");
    }
}

const leerInput = async( message ) => {
    const question = [
        {
            type:"input",
            name:"desc",
            message,
            validate(value){
                if(value.length === 0){
                    return "Por favor ingrese un valor";
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);

    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}
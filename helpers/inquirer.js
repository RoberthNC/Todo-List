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
                name:'1. Crear una tarea'
            },
            {
                value:'2',
                name:'2. Listar tareas'
            },
            {
                value:'3',
                name:'3. Listar tareas completadas'
            },
            {
                value:'4',
                name:'4. Listar tareas pendientes'
            },
            {
                value:'5',
                name:'5. Completar tarea(s)'
            },
            {
                value:'6',
                name:'6. Borrar tarea'
            },
            {
                value:'0',
                name:'0. Salir'
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

module.exports = {
    inquirerMenu,
    pausa
}
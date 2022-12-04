const inquirer = require("inquirer");
require("colors");

const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea hacer?',
        choices:[
            "1. Crear una tarea",
            "2. Listar tareas",
            "3. Listar tareas completadas",
            "4. Listar tareas pendientes",
            "5. Completar tarea(s)",
            "6. Borrar tarea",
            "0. Salir"
        ]
    }
];

const inquirerMenu = async() => {
    try{
        console.clear();
    
        console.log("=====================".blue);
        console.log("Seleccione una opción".blue);
        console.log("=====================\n".blue);
    
        const opt = await inquirer.prompt(preguntas);
    
        return opt;
    }catch(e){
        throw new Error("Algo salio mal!");
    }

}

module.exports = {
    inquirerMenu
}
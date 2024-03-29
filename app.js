import colors from "colors"
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js"
import { inquirerMenu, leerInput, pausa, listadoEliminar, confirm, mostrarListadoChecklist } from "./helpers/inquirer.js"
import Tareas from "./models/tareas.js"

const main = async() => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }

    //await pausa()

    do{

        opt = await inquirerMenu()

        switch(opt){
            case "1":
                const descripcion = await leerInput("Descripción:")
                tareas.crearTarea(descripcion)
                break
            case "2":
                tareas.listadoCompleto()
                break
            case "3":
                tareas.listarPendientesCompletadas(true)
                break
            case "4":
                tareas.listarPendientesCompletadas(false)
                break
            case "5":
                const ids = await mostrarListadoChecklist(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                break
            case "6":
                const id = await listadoEliminar(tareas.listadoArr)
                if( id !== "0" ){
                    const ok = await confirm("¿Estás seguro?")
                    if( ok ){
                        tareas.borrarTarea(id)
                        console.log("Tarea Borrada")
                    }
                }
                break
            default:
                break
        }

        guardarDB(tareas.listadoArr)

        await pausa()

    }while(opt !== '0')

}

main()
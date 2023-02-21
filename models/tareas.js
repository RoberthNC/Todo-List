import Tarea from "./tarea.js"

class Tareas{

    _listado = {}

    get listadoArr(){
        const listado = []

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push( tarea )
        } )

        return listado
    }

    constructor(){
        this._listado = {}
    }

    borrarTarea(id = ""){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

    cargarTareasFromArray( tareas = [] ){
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea
        } )

    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea
    }

    listadoCompleto(){

        console.log()

        let salida = ""

        Object.keys(this._listado).forEach( (key, index) => {
            
            const indice = index + 1 +"."
            const estado = this._listado[key].completadoEn? "Completada".green: "Pendiente".red

            salida += `${indice.green} ${this._listado[key].descripcion} :: ${estado}\n`

        } )

        console.log(salida)
    }

    listarPendientesCompletadas(completadas){
        console.log()

        let salida = ""
        let indice = 0

        if( completadas ){
            //Listamos las completadas (Verde)
            Object.keys(this._listado).forEach( key => {

                if( this._listado[key].completadoEn ){
                    indice += 1

                    salida += `${indice.toString().green + ".".green} ${this._listado[key].descripcion} :: ${this._listado[key].completadoEn.green}\n`
                }

            } )
        }
        else{
            //Listamos las pendientes (Rojo)
            Object.keys(this._listado).forEach( key => {

                if( !this._listado[key].completadoEn ){
                    indice += 1
                    const estado = "Pendiente".red

                    salida += `${indice.toString().green + ".".green} ${this._listado[key].descripcion} :: ${estado}\n`
                }

            } )
        }

        console.log(salida)

    }

    toggleCompletadas(ids = []){
        ids.forEach( id => {

            const tarea = this._listado[id]

            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString()
            }

        } )

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completadoEn = null
            }
        } )

    }

}

export default Tareas
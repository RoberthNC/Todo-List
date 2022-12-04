const { v4: uudiv4 } = require("uuid");

class Tarea{
    id = '';
    descripcion = '';
    completadoEn = null;

    constructor(desc){
        this.id = uudiv4();
        this.descripcion = desc;
        this.completadoEn = null;
    }
}

module.exports = Tarea;
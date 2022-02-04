const fs = require("fs"); 
const estados = ["pendiente","terminada","en progreso"] //Hecho en clase del 03/02

function escribirJSON(string){ //Hecho en clase del 03/02
    fs.writeFileSync("./BaseDeDatos/tareas.json",JSON.stringify(string))
}

function traerJSON(){
    return JSON.parse(fs.readFileSync("./BaseDeDatos/tareas.json","utf-8"))
}

function listaDeTitulos(array){  // no es necesario solo soy fran aburrido
    return array.map(tarea => tarea.titulo)
}


/*-----------------------------Funciones Exportadas-------------------------------------------*/

function listadoTareas(){ //Hecho en clase del 01/02
    return filtrarPorEstado("terminada").concat(filtrarPorEstado("en progreso").concat(filtrarPorEstado("pendiente"))) 
}

function crearTareas(tituloDeLaTarea){ //Hecho en clase del 03/02
    traerJSON().push({titulo : tituloDeLaTarea, estado : "pendiente"});
    escribirJSON(tareas);
}

function filtrarPorEstado(estadoEsperado){ //Hecho en clase del 03/02
    return traerJSON().filter(tarea => tarea.estado == estadoEsperado);
}

function cambiarEstado(tituloPedido,nuevoEstado){  // no es necesario solo soy fran aburrido
    let tareas = traerJSON();
    tareas.forEach(function(tarea){
        if(tarea.titulo == tituloPedido){
            tarea.estado = nuevoEstado
        }
    });
    escribirJSON(tareas);
}

function tituloSegunIndice(indice){  // no es necesario solo soy fran aburrido
    return traerJSON()[indice - 1].titulo
}

function error(estado,titulo){  // no es necesario solo soy fran aburrido
    if(titulo != true){
        tituloBool = !listaDeTitulos(traerJSON()).includes(titulo);
    }else{
        tituloBool = false;
    }

    if(estado != true){
        estadoBool = !estados.includes(estado)
    }else{
        estadoBool = false;
    }
    
    if(estadoBool & tituloBool){
        console.log("tanto el titulo como el estado no se encuentran en el sistema");
        return false;
    }else if(tituloBool){
        console.log("La tarea no se encuentra");
        return false
    }else if(estadoBool){
        console.log("El estado no existe en el sistema")
        return false;
    }else{
        return true;
    }  
}

module.exports = { 
    listadoTareas : listadoTareas, 
    crearTareas: crearTareas, 
    filtrarPorEstado: filtrarPorEstado, 
    cambiarEstado : cambiarEstado,
    tituloSegunIndice : tituloSegunIndice,
    error: error
}
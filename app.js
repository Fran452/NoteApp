const funcionesTarea = require("./fucionesDeTareas")



switch(process.argv[2]){
        case "listar":  
            let tareasBD = funcionesTarea.listadoTareas(); //Hecho en clase del 01/02
            console.log( `Litado de tareas\n--------------------`);
            tareasBD.forEach((tarea,indice) => console.log(`${indice+1} ${tarea.titulo} ---> ${tarea.estado}`));
        break;

        case "crear": //Hecho en clase del 03/02
            funcionesTarea.crearTareas(process.argv[3]);
            console.log("La tarea fue creada\n------------------------------------");
        break;

        case "filtrar": //Hecho en clase del 03/02
            if(funcionesTarea.error(process.argv[3],true)){
                let tareasFiltradas = funcionesTarea.filtrarPorEstado(process.argv[3]);
                console.log(`${process.argv[3]}\n-----------------`);
                tareasFiltradas.forEach(tarea => console.log(tarea.titulo));
            }
        break;

        case "estadoPorNombre": // no es necesario solo soy fran aburrido
            if(funcionesTarea.error(process.argv[4],process.argv[3])){
                funcionesTarea.cambiarEstado(process.argv[3],process.argv[4]);
            }
        break;

        case "estadoPorIndice": // no es necesario solo soy fran aburrido
            if(funcionesTarea.error(process.argv[4],funcionesTarea.tituloSegunIndice(process.argv[3]))){
                funcionesTarea.cambiarEstado(funcionesTarea.tituloSegunIndice(process.argv[3]),process.argv[4]);
            }
        break;
        
        case undefined: //Hecho en clase del 01/02
            console.log("Atencion - Tiene que pasar una acción");
        break;

        default: //Hecho en clase del 01/02
            console.log("No entiendo qué quiere hacer...");

}

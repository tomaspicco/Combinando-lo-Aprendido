// Importa las funciones necesarias desde otros módulos
import { Lista } from "./Lista.js"; // Lista que contiene las tareas
import { scanf, Esperarscanf, limpiarPantalla } from "./Funciones.js"; // Funciones para entrada, espera y limpieza de pantalla
import { funcion } from "./Funcionesingresar.js"; // Funciones para ingresar los atributos de la tarea
import {
  mostrarCoincidencias,
  mostrarDetallesTarea,
} from "./Funcionesmostrar.js"; // Funciones para mostrar tareas y detalles

// Función para editar una tarea
export function editarTarea(ver) {
  console.log("Si deseas editarla presiona E, o presiona 0 para volver.");
  let editar = scanf().toUpperCase(); // Pregunta al usuario si quiere editar o volver al menu (E para editar, 0 para volver)

  if (editar === "E") {
    let opcionEditar;
    do {
      console.log("¿Qué atributo deseas editar?");
      console.log(
        "[1] Título\n[2] Descripción\n[3] Estado\n[4] Dificultad\n[5] Fecha de vencimiento\n[0] Volver"
      );
      opcionEditar = parseInt(scanf("Ingresa una opción: ")); // Solicita al usuario que elija qué desea editar

      // Verifica la opción ingresada
      while (isNaN(opcionEditar) || opcionEditar < 0 || opcionEditar > 5) {
        opcionEditar = parseInt(
          scanf("Opción inválida. Ingresa una opción válida: ")
        );
      }

      // Edita el atributo de la tarea según la opción que se ingreso
      switch (opcionEditar) {
        case 1:
          // Edita el título de la tarea
          Lista.ListadeTareas[ver - 1].titulo = funcion.ingresarTitulo();
          console.log("El titulo se cambio con exito");
          Esperarscanf(); // Espera que el usuario presione una tecla
          limpiarPantalla(); // Limpia la pantalla
          break;
        case 2:
          // Edita la descripción de la tarea
          Lista.ListadeTareas[ver - 1].descripcion =
            funcion.ingresarDescripcion();
          console.log("La descripcion se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 3:
          // Edita el estado de la tarea
          Lista.ListadeTareas[ver - 1].estado = funcion.ingresarEstado();
          console.log("El estado se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 4:
          // Edita la dificultad de la tarea
          Lista.ListadeTareas[ver - 1].dificultad =
            funcion.ingresarDificultad();
          console.log("La dificultad se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 5:
          // Edita la fecha de vencimiento de la tarea
          Lista.ListadeTareas[ver - 1].vencimiento =
            funcion.ingresarFechadeVencimiento();
          console.log("La fecha de vencimiento se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 0:
          console.log("Saliendo del editor..."); // Sale del editor
          break;
        default:
          console.log("Opción no válida."); // si el valor ingresado no coincide con las opciones se muestra "la opcion no es valida"
          break;
      }
    } while (opcionEditar !== 0); // El ciclo sigue hasta que el usuario elija volver (0)
  }
}

// Función para buscar tareas por título
export function buscarTarea(cadena) {
  // Filtra las tareas que contienen la cadena de búsqueda en el título
  let resultados = Lista.ListadeTareas.filter((tarea) =>
    tarea.titulo.toLowerCase().includes(cadena.toLowerCase())
  );

  if (resultados.length === 0) {
    console.log("No hay tareas relacionadas con la búsqueda."); // No se encontraron resultados
    Esperarscanf(); // Espera que el usuario presione una tecla
  } else {
    // Muestra las coincidencias encontradas
    mostrarCoincidencias(resultados);
  }
}

// Función para gestionar los resultados de la búsqueda
export function gestionarResultados(resultados) {
  console.log("\n¿Qué deseas hacer?");
  console.log("[1] Ver detalles de la tarea");
  console.log("[0] Volver al menú principal");

  let opcion = parseInt(scanf()); // Solicita la opción del usuario
  switch (opcion) {
    case 1:
      console.log("Ingrese el número de la tarea para ver los detalles: ");
      let indice = parseInt(scanf()) - 1; // Solicita el índice de la tarea

      // Verifica si el índice es válido
      if (indice >= 0 && indice < resultados.length) {
        // Muestra los detalles de la tarea seleccionada
        mostrarDetallesTarea(resultados[indice]);
      } else {
        console.log("Número inválido. Inténtelo nuevamente."); // Si el índice no es válido, solicita otro
        gestionarResultados(resultados);
      }
      break;
    case 0:
      console.log("Volviendo al menú principal..."); // Vuelve al menú principal
      break;
    default:
      console.log("Opción no válida."); // Opción no válida
      gestionarResultados(resultados); // Vuelve a solicitar la opción
  }
}

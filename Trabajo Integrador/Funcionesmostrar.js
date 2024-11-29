// Importación de módulos necesarios para la funcionalidad del programa
import { Lista } from "./Lista.js"; // Lista de tareas
import { Esperarscanf, limpiarPantalla, scanf } from "./Funciones.js"; // Funciones auxiliares para la interfaz
import { menu } from "./Menúes.js"; // Menú principal para navegación
import { editarTarea, gestionarResultados } from "./Funcionesgestoras.js"; // Funciones para gestionar tareas

// Muestra los detalles de una tarea
export function mostrarDetallesTarea(tarea) {
  limpiarPantalla(); // Limpia la pantalla antes de mostrar la información
  console.log("\nDetalles de la tarea seleccionada:");
  console.log(`Título: ${tarea.titulo}`); // Muestra el título de la tarea
  console.log(`Descripcion: ${tarea.descripcion}`); // Muestra la descripción
  console.log(`Estado: ${tarea.estado}`); // Muestra el estado de la tarea
  console.log(`Fecha de Creación: ${tarea.fechaDeCreacion}`); // Muestra la fecha de creación
  console.log(`Vencimiento: ${tarea.vencimiento}`); // Muestra la fecha de vencimiento
  console.log(`Dificultad: ${tarea.dificultad}`); // Muestra la dificultad de la tarea
  console.log("------------------------");
  Esperarscanf(); // Espera una entrada antes de continuar
}

// Función que permite ver los detalles de una tarea seleccionada
export function verdetalles(estado) {
  console.log("¿Deseas ver los detalles de alguna?");
  console.log("Introduce el número para verla o 0 para volver"); // Instrucciones para el usuario
  let ver = parseInt(scanf()); // Obtiene la opción del usuario

  while (true) {
    if (ver === 0) {
      // Si el usuario elige 0, vuelve al menú
      console.log("Volviendo al Menú anterior...");
      menu.menuPrincipal(); // Vuelve al menú principal
      return; // Sale de la función
    } else if (
      ver > 0 &&
      ver <= Lista.ListadeTareas.length && // Verifica que la tarea esté en el rango válido
      Lista.ListadeTareas[ver - 1].estado === estado // Verifica que la tarea tenga el estado que se ingreso
    ) {
      console.log(`Título: ${Lista.ListadeTareas[ver - 1].titulo}`); // Muestra el título
      console.log(`Descripción: ${Lista.ListadeTareas[ver - 1].descripcion}`); // Muestra la descripción
      console.log(`Estado: ${Lista.ListadeTareas[ver - 1].estado}`); // Muestra el estado
      console.log(
        `Fecha de Creación: ${Lista.ListadeTareas[ver - 1].fechaDeCreacion}` // Muestra la fecha de creación
      );
      console.log(`Vencimiento: ${Lista.ListadeTareas[ver - 1].vencimiento}`); // Muestra la fecha de vencimiento
      console.log(`Dificultad: ${Lista.ListadeTareas[ver - 1].dificultad}`); // Muestra la dificultad
      console.log("------------------------");
      editarTarea(ver); // Permite al usuario editar la tarea
      return; // Sale de la función después de editar
    } else {
      limpiarPantalla(); // Limpia la pantalla
      console.log("El número de tarea que indicó es incorrecto"); // Mensaje de error
      // Muestra todas las tareas disponibles con su índice
      for (let i = 0; i < Lista.ListadeTareas.length; i++) {
        if (Lista.ListadeTareas[i].estado === estado) {
          console.log(`[${i + 1}]: ${Lista.ListadeTareas[i].titulo}`);
        }
      }
      console.log("Introduce el número para verla o 0 para volver");
      ver = parseInt(scanf()); // Vuelve a solicitar la entrada del usuario
    }
  }
}

// Función para ver tareas según su estado
export function verTareasPorEstado(estado) {
  let contador = 0;
  for (let i = 0; i < Lista.ListadeTareas.length; i++) {
    if (Lista.ListadeTareas[i].estado === estado) {
      // Verifica si la tarea coincide con el estado
      contador++;
      console.log(`[${i + 1}]: ${Lista.ListadeTareas[i].titulo}`); // Muestra el título de la tarea
    }
  }
  if (contador > 0) {
    verdetalles(estado); // invoca la  función para ver detalles de la tarea
  } else {
    console.log("No hay tareas para mostrar."); // Si no hay tareas para mostrar, informa al usuario
    Esperarscanf(); // Espera la entrada del usuario
    menu.menuPrincipal(); // Vuelve al menú principal
  }
  return contador; // Retorna el contador de tareas encontradas
}

// Función para mostrar todas las tareas
export function mostrarTodasTareas() {
  if (Lista.ListadeTareas.length === 0) {
    // Verifica si hay tareas
    console.log("No hay tareas para mostrar.");
    Esperarscanf(); // Espera la entrada del usuario
    menu.menuPrincipal(); // Vuelve al menú principal
    return; // Sale de la función
  }
  console.log("Estas son todas tus tareas:"); // Mensaje inicial
  for (let i = 0; i < Lista.ListadeTareas.length; i++) {
    console.log(`[${i + 1}]: ${Lista.ListadeTareas[i].titulo}`); // Muestra el título de cada tarea
  }
  verdetallesTodas(); // Llama a la función para ver los detalles de todas las tareas
}

// Función para ver los detalles de todas las tareas
export function verdetallesTodas() {
  console.log("¿Deseas ver los detalles de alguna?"); // Mensaje inicial
  console.log("Introduce el número para verla o 0 para volver"); // Instrucciones para el usuario
  let ver = parseInt(scanf()); // Obtiene la opción del usuario

  while (true) {
    if (ver === 0) {
      // Si el usuario elige 0, vuelve al menú
      console.log("Volviendo al Menú anterior...");
      menu.menuPrincipal(); // Vuelve al menú principal
      return; // Sale de la función
    } else if (ver > 0 && ver <= Lista.ListadeTareas.length) {
      // Verifica si el número es válido
      console.log(`Título: ${Lista.ListadeTareas[ver - 1].titulo}`); // Muestra el título de la tarea
      console.log(`Descripción: ${Lista.ListadeTareas[ver - 1].descripcion}`); // Muestra la descripción
      console.log(`Estado: ${Lista.ListadeTareas[ver - 1].estado}`); // Muestra el estado de la tarea
      console.log(
        `Fecha de Creación: ${Lista.ListadeTareas[ver - 1].fechaDeCreacion}` // Muestra la fecha de creación
      );
      console.log(`Vencimiento: ${Lista.ListadeTareas[ver - 1].vencimiento}`); // Muestra la fecha de vencimiento
      console.log(`Dificultad: ${Lista.ListadeTareas[ver - 1].dificultad}`); // Muestra la dificultad de la tarea
      console.log("------------------------");
      editarTarea(ver); // Permite al usuario editar la tarea
      return; // Sale de la función después de editar
    } else {
      limpiarPantalla(); // Limpia la pantalla si el número es inválido
      console.log("El número de tarea que indicó es incorrecto"); // Mensaje de error
      // Muestra todos los títulos de tareas con su índice
      for (let i = 0; i < Lista.ListadeTareas.length; i++) {
        console.log(`[${i + 1}]: ${Lista.ListadeTareas[i].titulo}`);
      }
      console.log("Introduce el número para verla o 0 para volver"); // Nuevas instrucciones
      ver = parseInt(scanf()); // Solicita la entrada del usuario nuevamente
    }
  }
}

// Función para mostrar las tareas que coinciden con una búsqueda
export function mostrarCoincidencias(resultados) {
  limpiarPantalla(); // Limpia la pantalla antes de mostrar los resultados
  console.log("Tareas encontradas:"); // Mensaje inicial
  resultados.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`); // Muestra el título de cada tarea encontrada
  });

  gestionarResultados(resultados); // Llama a la función para gestionar los resultados
}

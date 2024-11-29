// Importa la función scanf
import { scanf } from "./Funciones.js";

// Objeto que contiene funciones para ingresar atributos de las tareas
export const funcion = {
  // Función para ingresar el título de la tarea
  ingresarTitulo: function () {
    let titulo = scanf("1- Ingrese el título (es obligatorio): ");
    // si el título está vacío lo vuelve a pedir
    while (titulo === "") {
      titulo = scanf("El título no puede ser nulo, ingrese uno: ");
    }
    return titulo; // Devuelve el título ingresado
  },

  // Función para ingresar el estado de la tarea
  ingresarEstado: function () {
    // Solicita al usuario el estado de la tarea
    let estado = scanf(
      "3- Ingrese el estado que por defecto esta pendiente: [P]pendiente/ [EC]en curso/ [T]terminada/ [C] cancelada:"
    );
    estado = estado.toUpperCase(); // Convierte a mayúsculas
    // Repite la solicitud si el estado no es válido
    while (estado != "P" && estado != "EC" && estado != "T" && estado != "C") {
      console.log("Ingresó un estado no válido.Ingrese otro: ");
      estado = scanf();
      estado = estado.toUpperCase();
    }
    return estado; // Devuelve el estado válido
  },

  // Función para ingresar la dificultad de la tarea
  ingresarDificultad: function () {
    // Solicita la dificultad de la tarea
    let dificultad = scanf(
      "4- Ingrese la dificultad, por defecto fácil: [F]fácil(⭐)/[M]medio(⭐⭐)/[D]difícil(⭐⭐⭐): "
    );
    dificultad = dificultad.toUpperCase(); // Convierte a mayúsculas
    // Repite la solicitud si la dificultad no es válida
    while (dificultad != "F" && dificultad != "M" && dificultad != "D") {
      dificultad = scanf(
        "La dificultad ingresada es inválida, ingrese nuevamente: "
      );
      dificultad = dificultad.toUpperCase();
    }
    // Asigna estrellas segun la dificultad ingresada
    if (dificultad === "F") {
      dificultad = "⭐";
    } else if (dificultad === "M") {
      dificultad = "⭐⭐";
    } else if (dificultad === "D") {
      dificultad = "⭐⭐⭐";
    }
    return dificultad; // Devuelve la dificultad en estrellas
  },

  // Función para ingresar la fecha de vencimiento
  ingresarFechadeVencimiento: function () {
    let FechaActual = new Date(); // Fecha actual
    let fechaVencimiento = this.PedirFechadeVencimiento(); // Solicita la fecha
    //Si la fecha de vencimiento es anterior a la fecha actual la vuelve a pedir
    while (fechaVencimiento <= FechaActual) {
      console.log("Fecha no válida. Ingrese nuevamente: ");
      fechaVencimiento = PedirFechadeVencimiento();
    }
    return fechaVencimiento; // Devuelve la fecha válida
  },

  // Función para ingresar una descripción para la tarea (opcional)
  ingresarDescripcion: function () {
    let descripcion = scanf("2- Ingrese una descripcion: ");
    // Si no se ingresa una descripción, asigna "Sin Descripcion"
    return descripcion || "Sin Descripcion";
  },

  // Función que pide la fecha de vencimiento de la tarea (se maneja mes, día, hora)
  PedirFechadeVencimiento: function () {
    let anno,
      mes,
      dia,
      band = -1,
      hora,
      fechaVencimiento;

    // Solicita el año de vencimiento
    anno = scanf("Ingrese el año de vencimiento: ");
    anno = parseInt(anno);

    // Verifica que el año sea válido (entre 1000 y 9999)
    while (isNaN(anno) || anno < 1000 || anno > 9999) {
      anno = scanf(
        "El año de vencimiento ingresado no es válido. Ingrese otro: "
      );
      anno = parseInt(anno);
    }

    // Solicita el mes de vencimiento (entre 1 y 12)
    mes = scanf("Ingrese el mes de vencimiento entre el 1 y 12: ");
    mes = parseInt(mes);
    while (isNaN(mes) || mes < 1 || mes > 12) {
      mes = scanf(
        "Mes de vencimiento no válido, reingrese uno correcto del 1 al 12: "
      );
      mes = parseInt(mes);
    }

    // Solicita el día de vencimiento según el mes
    do {
      if (band >= 0) {
        console.log("Ingresó un día no válido.");
      }
      switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          // Los meses con 31 días
          dia = scanf("Ingrese el día de vencimiento entre el 1 y 31: ");
          dia = parseInt(dia);
          if (dia < 1 || dia > 31) dia = NaN;
          break;
        case 2:
          // Febrero, con verificacion de años bisiestos
          if (AnnoBisiesto(anno)) {
            dia = scanf("Ingrese el día de vencimiento del 1 al 29: ");
            dia = parseInt(dia);
            if (dia < 1 || dia > 29) dia = NaN;
          } else {
            dia = scanf("Ingrese el día de vencimiento del 1 al 28: ");
            dia = parseInt(dia);
            if (dia < 1 || dia > 28) dia = NaN;
          }
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          // Los meses con 30 días
          dia = scanf("Ingrese el día de vencimiento entre el 1 y 30: ");
          dia = parseInt(dia);
          if (dia < 1 || dia > 30) dia = NaN;
          break;
      }
      band++;
    } while (isNaN(dia)); // Repite hasta que el día sea válido

    // Solicita la hora de vencimiento (entre 0 y 23)
    hora = scanf("Ingrese la hora de vencimiento entre las 0 y las 23: ");
    hora = parseInt(hora);
    while (isNaN(hora) || hora < 0 || hora > 23) {
      hora = scanf(
        "Hora de vencimiento no válida, ingrese una correcta entre 0 y 23: "
      );
      hora = parseInt(hora);
    }

    // Crea el objeto de fecha con el año, mes, día y hora
    fechaVencimiento = new Date(anno, mes - 1, dia, hora);
    return fechaVencimiento.toLocaleDateString("es-ES"); // Devuelve la fecha de vencimiento
  },

  // Función para determinar si un año es bisiesto
  AnnoBisiesto: function (anno) {
    return anno % 4 === 0 && anno % 100 !== 0;
  },
};

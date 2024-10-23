// Micro desafío 2

// definimos variables
let nombre = "Juan";
let apellido = "Pérez";
let sueldoActual = 20000;
let porcentajeAumento = 25;

// resultado de la operación
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;

// resultado del cálculo del nuevo sueldo
let nuevoSueldo = sueldoActual + calculoAumento;

// contenidos de cada una de las variables
console.log("Hola, estimad@ " + nombre + " " + apellido);
console.log("En base a su sueldo actual: $" + sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeAumento + "%: $" + calculoAumento);
console.log("y su nuevo sueldo es de: $" + nuevoSueldo);
/*Este es el punto 1*/
let alumno = {
    nombre: "Juan Pérez",
    ingles: 8,
    programacion: 9,
    htm: 7
};
let promedio = (alumno.ingles + alumno.programacion + alumno.htm) / 3;
console.log("Nombre del alumno: " + alumno.nombre);
console.log("Promedio de calificaciones: " + promedio.toFixed(2));
/*Asi es como querias profe? o querias que pudiera escribir la nota de cada materia?*/
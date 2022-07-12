

let cantidadAlumnos = parseInt (prompt("indica cuantos alumnos registras"));
let edadAlumnos ; //registro edades
let sumaTotal = sumadorEdades(cantidadAlumnos);

function sumadorEdades(cantidadAlumnos){
    let contadorEdades= 0;
    let n;
    for (n=1; n<=cantidadAlumnos; n++){
    let edadAlumnos = parseInt(prompt("ingrese la edad del alumno " + n));
    contadorEdades += edadAlumnos;
    }
    return  contadorEdades;
}




let resultadoFinal = alert("el promedio de edad es" + sumaTotal / cantidadAlumnos )

if (resultadoFinal < 10) {
    console.log("dios me costo 10 huevos jaja")
} else {
    console.log("de cualquier forma me costo 10 huevos jaja")
}









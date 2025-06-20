/*Este es el punto 3, wazaaa!*/
const readline = require("readline");
/*Esto crear un lector de datos desde teclado*/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*Piedra*/
class Piedra {
    constructor(masa, volumen) {
    this.masa = masa;
    this.volumen = volumen;
    }
    densidad() {
    if (this.volumen === 0) {
        console.log("Error: el volumen no puede ser cero. >:(");
        return;
    }
    let resultado = this.masa / this.volumen;
    console.log("La densidad de la piedra es: " + resultado.toFixed(2));
    }
}
rl.question("Ingrese la masa de la piedra: ", (masaInput) => {
    rl.question("Ingrese el volumen de la piedra: ", (volumenInput) => {
    let masa = parseFloat(masaInput);
    let volumen = parseFloat(volumenInput);

    /*Se creamos un objeto de la clase Piedra*/
    let piedra = new Piedra(masa, volumen);
    piedra.densidad();
    rl.close();
    });
});
/*Y listo*/
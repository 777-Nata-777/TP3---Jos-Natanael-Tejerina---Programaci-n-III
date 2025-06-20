/*Este es el punto 2*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingrese el precio del producto: ", (precioInput) => {
    rl.question("Ingrese el porcentaje de descuento (X ejem: 20 para 20%): ", (descuentoInput) => {
    let producto = {
        precio: parseFloat(precioInput),
        descuento: parseFloat(descuentoInput),
        neto: function() {
        let descuentoCalculado = this.precio * (this.descuento / 100);
        return this.precio - descuentoCalculado;
        }
    };
    console.log("Precio con descuento aplicado: $" + producto.neto().toFixed(2));
    rl.close();
    });
});

console.log("Primer entrega");
alert("Convertidor de Divisas a Pesos Argentinos");

let tipo_conversion = prompt("Ingrese :1 ARS a Moneda Extranjera 2 Moneda Extranjera a ARS ");
//console.log(tipo_conversion);

const dolar = 0.0065;
const euro = 0.0066;
const yuan = 0.047;

if (tipo_conversion == 1 || tipo_conversion == 2) {

    let moneda = prompt("Ingrese :1 Dolar 2 Euro 3 Yuan ");
    //console.log(moneda);

    if (moneda <= 3) {

        let cantidad = prompt("Ingrese cantidad: ");
        //console.log(cantidad);


        if (tipo_conversion == 1) {
            // bloque de código a ejecutar

            console.log("El resultado de la conversion es",conv_ars(moneda, cantidad));


        } else {

            console.log("El resultado de la convesion es",conv_extranj(moneda, cantidad));

        }
    }
}

function conv_ars(moneda, cantidad) {
    switch (moneda) {
        case "1":
            return (cantidad * dolar + " " + "Dolares");
            break;
        case "2":
            return (cantidad * euro + " " + "Euros");
            break;
        case "3":
            return (cantidad * yuan + " " + "Dolares");
            break;
        default:
            return 0;
            break;
    }
}

function conv_extranj(moneda, cantidad) {
    switch (moneda) {
        case "1":
            return (cantidad / dolar + " " + "Pesos");
            break;
        case "2":
            return (cantidad / euro + " " + "Pesos");
            break;
        case "3":
            return (cantidad / yuan + " " +"Pesos");
            break;
        default:
            return 0;
            break;
    }
}
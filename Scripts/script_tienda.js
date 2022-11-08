class Regalo {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const Regalo_1 = new Regalo(1, "Llavero", 350, 10);
const Regalo_2 = new Regalo(2, "Remeras", 1550, 10);
const Regalo_3 = new Regalo(3, "Gorra", 600, 10);
const Regalo_4 = new Regalo(4, "Dinosaurio", 1200, 10);


const BD = [Regalo_1, Regalo_2, Regalo_3, Regalo_4];
const CR = [];

let agregar = 0;
let eliminar = 0;
let total = 0;

/*///////////////////////////////////////////////////////////////////////////////////////////*/

console.log("Elegir producto");

agregar_regalo();

CR.forEach((element) => {
    console.log(element.nombre + "------ $" + element.precio);
});

eliminar_regalo();

CR.forEach((element) => {
    total += (element.precio);
});

CR.forEach((element) => {
    console.log(element.nombre + "------ $" + element.precio);
});

alert("TOTAL:" + total);


/*///////////////////////////////////////////////////////////////////////////////////////////*/


function agregar_regalo() {
    while (agregar == 0) {

        BD.forEach((element) => {
            console.log(element.id + "." + element.nombre);
        });
    
        let i = prompt("Agregar al carrito: 1.Llavero 2.Remera 3.Grorra 4.Dinosurio F.Finalizar");
        //console.log(i);
    
        if (i > 0 && i < 5) {
            CR.push(BD[i - 1]);
        }
    
        if (i == "F") {
            agregar = 1;
        }
    }

}

function eliminar_regalo() {
    while (eliminar == 0) {
        let j = 0;
    
        CR.forEach((element) => {
            element.id = j+1;
            console.log(element.id + "." + element.nombre);
            j++;
        });
    
    
        let k = prompt("Indique el nombre del producto a eliminar o F.Finalizar");
    
        CR.forEach((element) => {
            
            if (element.nombre == k) {
                CR.splice(element.id-1, 1);
            }
        });
    
    
        if (k == "F") {
            eliminar = 1;
        }
    }
}
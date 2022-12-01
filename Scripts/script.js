class Regalo {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

const Regalo_1 = new Regalo(1, "Buzo", 350, "../images/buzo.jpg");
const Regalo_2 = new Regalo(2, "Remera", 1550, "../images/remera.jpg");
const Regalo_3 = new Regalo(3, "Gorra", 600, "../images/gorra.jpg");
const Regalo_4 = new Regalo(4, "Taza", 1200, "../images/taza.jpg");
const Regalo_5 = new Regalo(5, "Parasaurolophus", 350, "../images/parasaurolophus.jpg");
const Regalo_6 = new Regalo(6, "Tiranosurio Rex", 1550, "../images/tiranosaurio.jpg");
const Regalo_7 = new Regalo(7, "Ankylosaurus", 600, "../images/ankylosaurus.jpg");
const Regalo_8 = new Regalo(8, "Stegosaurus", 1200, "../images/stegosaurus.jpg");

const productos = [Regalo_1, Regalo_2, Regalo_3, Regalo_4, Regalo_5, Regalo_6, Regalo_7, Regalo_8];


let shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("btn-carrito")
console.log(verCarrito)
const contenidoCarrito = document.getElementById("contentCarrito")
const generalCarrito = document.getElementById("generalCarrito")
const spanTotal = document.getElementById("total")
const preciototal = document.getElementById("preciototal")



console.log(shopContent)

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "col"
  content.style.width = "18rem"
  content.innerHTML = `
  <div class="card">
    <img src="${product.img}" class="card-img-top rounded">
      <div class="card-body">        
          <h5 class="card-title">${product.nombre}</h5>
      </div>
   <ul class="list-group list-group-flush">
      <li class="list-group-item">$${product.precio}</li>
   </ul>
  </div>
  `;

  let comprar = document.createElement("button");
  comprar.innerText = "comprar"
  comprar.className = "btn btn-primary m-3"
  content.append(comprar)

  shopContent.append(content)

  comprar.addEventListener("click", () => {
    carrito.push(
      {
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        img: product.img
      }
    )
    actualizarCarrito()
    //console.log(carrito)
  })

})

let carrito = []



function actualizarCarrito() {

  const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
  guardarLocal("carrito", JSON.stringify(carrito));


  contenidoCarrito.innerHTML = `<p class="text-start text-uppercase fs-2 fw-bold p-4">CARRITO</p>`;

  carrito.forEach((product) => {

    let carritoContent = document.createElement("div")
    carritoContent.classList = "d-flex flex-column align-items-end"
    carritoContent.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${product.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">$${product.precio}</p>
            <button class="delete-producto btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
    `;

    contenidoCarrito.append(carritoContent)

    let eliminar = carritoContent.querySelector(".delete-producto")
    console.log(eliminar)

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id)
    })

  })


  const total = carrito.reduce((acc, el) => acc + el.precio, 0)


  console.log(total)
  console.log(carrito)
  spanTotal.innerText = `TOTAL:${total}`;


}

verCarrito.addEventListener("click", actualizarCarrito)


const eliminarProducto = (id) => {

  console.log("eliminado")
  const foundId = carrito.find((element) => element.id === id)
  console.log(foundId)
  carrito = carrito.filter((carritoId) => {
    return carritoId != foundId;
  })
  localStorage.removeItem(id)
  actualizarCarrito()
}


function probando() {
  console.log("probando")
}



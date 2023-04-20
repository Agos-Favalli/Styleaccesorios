class Producto{
  constructor(nombre,precio,cantidad){
      this.nombre = nombre
      this.precio = precio
      this.cantidad = cantidad
  }
}

const listaProductos = []

//DOM

const contenedor_accesorios = document.getElementById("contenedor_accesorios")
const formulario = document.getElementById("formulario")
const limpiarBtn = document.getElementById("limpiarBtn")

formulario.addEventListener("submit", (e) =>{

  e.preventDefault()

  const nombre = document.getElementById("nombre").value
  const precio = document.getElementById("precios").value
  const cantidad = document.getElementById("cantidades").value

  const nuevoProducto = new Producto(nombre, precio, cantidad)

  listaProductos.push(nuevoProducto)

  // Agregar a localStorage
  localStorage.setItem("productos", JSON.stringify(listaProductos))

  limpiarDOM(contenedor_accesorios)

  listaProductos.forEach( producto => {
  mostrarProductos(contenedor_accesorios, producto)
  })

  formulario.reset()

})

function limpiarDOM(contenedor_accesorios){
contenedor_accesorios.innerHTML = ``
}

function mostrarProductos(contenedor_accesorios, producto){
 contenedor_accesorios.innerHTML += `<h3>Nombre: ${producto.nombre}</h3>
 <p>Precio: ${producto.precio}</p>
 <p>Cantidad: ${producto.cantidad}</p>`
}

function limpiarLocalStorage() {
localStorage.removeItem("productos")
listaProductos.length = 0
limpiarDOM(contenedor_accesorios)
}

// Verificar si hay productos en localStorage y agregarlos a la lista
if (localStorage.getItem("productos")) {
const productosLocalStorage = JSON.parse(localStorage.getItem("productos"))
productosLocalStorage.forEach(producto => listaProductos.push(new Producto(producto.nombre, producto.precio, producto.cantidad)))
listaProductos.forEach(producto => mostrarProductos(contenedor_accesorios, producto))
}

limpiarBtn.addEventListener("click", () => {
limpiarLocalStorage()
})

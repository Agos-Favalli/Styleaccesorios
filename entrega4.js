class Producto {
    constructor(id, nombre, precio, descuento, img, alt) {
      this.id = id;
      this.nombre = nombre;
      this.cantidad = 1;  
      this.precio = precio;
      this.descuento = descuento;
      this.img = img;
      this.alt = alt;
    }
  }
  class ProductoController{
      constructor(){
          this.listaProductos = []
          this.contenedor_productos = document.getElementById("contenedor_productos");
      }
      iniciar(){
          this.listaProductos = [
              new Producto(1,"Abridores Acero Blanco Coronita",247,199,"../img/SALE/Abridores 001.jpeg","Abridores Coronita",1),
              new Producto(2,"Abridores Acero Blanco Mariposa",260,208,"../img/SALE/Abridores 1.jpeg","Abridores Mariposa",4),
              new Producto(3,"Abridores Acero Mariposa Calada",247,199,"../img/SALE/Abridores 7.jpeg","Abridores Mariposa Calada",4),
              new Producto(4,"Anillo Acero Blanco Vive Rie Ama",470,376,"../img/SALE/Anillos 000008.jpeg","Anillo Vive Rie Ama",1),
              new Producto(5,"Anillo Acero Blanco Vive tus Sueños",470,376,"../img/SALE/Anillos 00001.jpeg","Anillo Vive tus Sueños",2),
              new Producto(6,"Anillo Acero Blanco Se Feliz",470,376,"../img/SALE/Anillos 00002.jpeg","Anillo Se Feliz",1),
              new Producto(7,"Anillo Acero Blanco Amor y Paz",470,376,"../img/SALE/Anillos 0005.jpeg","Anillo Amor y Paz",2),
              new Producto(8,"Pulsera Acero Blanco Triple Circulo",765,612,"../img/SALE/Pulseras 0001.jpeg","Pulsera Triple Circulo",2),
              new Producto(9,"Pulsera Acero Blanco Mariposas",685,548,"../img/SALE/Pulseras 00007.jpeg","Pulsera Doble Cadena Mariposas",2),
              new Producto(10,"Pulsera Acero Blanco Tres Esclavas",738,590,"../img/SALE/Pulseras 00006.jpeg","Pulsera Tres Esclavas",3),
              new Producto(11,"Pulsera Acero Blanco Cactus",685,548,"../img/SALE/Pulseras 02.jpeg","Pulsera Doble Cadena Cactus",1),
              new Producto(12,"Pulsera Acero Blanco Libelula",765,612,"../img/SALE/Pulseras 03.jpeg","Pulsera Libelula",2),
              new Producto(13,"Aros Acero Blanco Trepadores Circulo",439,352,"../img/SALE/Aros 03.jpeg","Aros Trepadores",3),
              new Producto(14,"Aros Acero Blanco Circulo",439,352,"../img/SALE/Aros 1.jpeg","Aros Colgantes Circulo",1),
              new Producto(15,"Collar Acero Blanco Ama Cada Dia",834,668,"../img/SALE/Collares 001.jpeg","Collar Ama Cada Dia",3),
              new Producto(16,"Collar Acero Blanco Mano de Fatima",834,668,"../img/SALE/Collares 1.jpeg","Collar Mano de Fatima",2),
              new Producto(17,"Collar Acero Blanco Esfera",734,588,"../img/SALE/Collares 05.jpeg","Collar Esfera",3),
          ]
      }
      mostrarEnDOM(){
          this.listaProductos.forEach((producto) => {
              this.contenedor_productos.innerHTML += `<div class="card">
                        <img class="imagen" src="${producto.img}" role="button" width="300" alt="${producto.alt}" >
                       <div class="card-body">
                         <p class="title">${producto.nombre}</p>
                         <p class="descuento"> <del>ANTES $${producto.precio}</del></p>
                         <p class="precio">AHORA $${producto.descuento}</p>
                         <div class="boton">
                             <input id="accesorio-${producto.id}" type="submit" value="Añadir al Carrito" >
                         </div>  
                       </div>
                    </div>`;
            });
  
      }
      //Eventos
      darEventoClickAProducto(controladorCarrito){
      this.listaProductos.forEach((producto) => {
      const btnAgregar = document.getElementById(`accesorio-${producto.id}`);
      btnAgregar.addEventListener("click", () => {
        
        controladorCarrito.agregar(producto)
        controladorCarrito.guardarEnStorage()
        controladorCarrito.mostrarEnDOM(this.contenedor_carrito)
      })
    })
      }
  }
  class CarritoController{
      constructor(){
          this.listaCarrito = []
          this.contenedor_carrito = document.getElementById("contenedor_carrito");
      }
      agregar(producto){
          this.listaCarrito.push(producto)
      }
      //Storage y Json
      guardarEnStorage(){
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito",listaCarritoJSON)
      }
      levantarDeStorage(){
       this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || []
       this.listaCarrito.length > 0 && this.mostrarEnDOM();
      }
      limpiarContenedor_carrito(){
          this.contenedor_carrito.innerHTML = "";
      }
      mostrarEnDOM(){   
      this.limpiarContenedor_carrito()
      this.listaCarrito.forEach(producto =>{
          this.contenedor_carrito.innerHTML += `
          <div class="card mb-3" style="max-width: 540px;">
             <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                </div>
                <div class="col-md-8">
                     <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">PRECIO: $${producto.descuento}</p>
                        <p class="card-text">CANTIDAD: ${producto.cantidad}</p>
                        <td><button class="remove" data-index="0">Eliminar</button></td>
                     </div>
                </div>
             </div>
        </div>`;
      })
     }
  }
  
  const controladorProductos = new ProductoController()
  controladorProductos.iniciar()
  
  const controladorCarrito = new CarritoController()
  controladorCarrito.levantarDeStorage()
  
  //DOM
  controladorProductos.mostrarEnDOM()
  
  //Eventos
  controladorProductos.darEventoClickAProducto(controladorCarrito)
  
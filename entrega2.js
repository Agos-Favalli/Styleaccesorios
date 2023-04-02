// variable mensaje de bienvenida

let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su apellido");
let mensaje = `Bienvenid@" ${nombre}  ${apellido}`;

// condicion para el mensaje de bienvenida

if ( (nombre != " " && apellido != " ") ) {
    alert(mensaje);

    //objetos
    const accesorios = [
        {nombre: "Aros", precio: 500, cantidad: 10},
        {nombre: "Pulseras", precio: 1000, cantidad: 5},
        {nombre: "Anillos", precio: 750, cantidad: 8},
        {nombre: "Collares", precio: 1500, cantidad: 3}
    ];
   
    //Variables para calculos

    let minimo = 4000
    let totalAPagar = 0;
    let envioGratis = 7000
    
    accesorios.forEach((accesorio, index) => {
        alert(
          `${index + 1}. ${accesorio.nombre} - $${accesorio.precio} - ${
            accesorio.cantidad
          } unidades disponibles`
        );
      });

    // seleccion de accesorios
    let seleccionados = [];
    while (true) {
      let opcion = prompt(
        "Seleccione un accesorio para comprar (ingrese el número correspondiente) o ingrese 'f' para finalizar la selección"
      );
      if (opcion === "f") {
        break;
      } else if (opcion >= 1 && opcion <= accesorios.length) {
        let accesorio = accesorios[opcion - 1];
        if (accesorio.cantidad > 0) {
          seleccionados.push(accesorio);
          accesorio.cantidad--;
          totalAPagar += accesorio.precio;
        } else {
          alert("Lo sentimos, este accesorio no está disponible en este momento.");
        }
      } else {
        alert("Opción inválida.");
      }
    }
    alert("El total de la compra es $" + totalAPagar);

    let cantidadTotal = seleccionados.reduce((total, accesorio) => total + 1, 0);
    alert(`Ha seleccionado ${cantidadTotal} accesorios`);

    //Funciones para cálculo de formas de pagos

    if (totalAPagar < minimo) {
        alert("Su importe es inferior al mínimo de compra exigido por $4000");
        alert("No se puede realizar la compra");
    } else {
        alert("realizar compra");
        if (totalAPagar <= envioGratis ) {
            alert("Envio gratis a partir de los $7000");
            prompt("Ingrese su codigo postal para calcular el envío");
        } else {
            alert ("envio gratis");
        }

        // bucle para la eleccion de forma de pago
        
        let formaDePago = prompt('Elija la forma de pago:\n 1: Efectivo,\n 2: Transferencia,\n 3: Tarjeta,');
         while (formaDePago !== "1" && formaDePago !== "2" && formaDePago !== "3") {
         formaDePago = prompt('Por favor, elija una forma de pago válida:\n 1: Efectivo,\n 2: Transferencia,\n 3: Tarjeta,');
        }

        switch((formaDePago)){
        case "1":
        alert("Tienes un 15% de descuento ")
        break;
        case "2":
        alert("Tienes un 15% de descuento")
        alert("La CBU para realizar la transferencia es la siguiente. 0071928374958739200098. Una vez hecha enviar comprobante para confirmar el pago mediante email o whatsapp")
        break;
        case "3": 
        let tarjeta = prompt("Selecciones la tarjeta: \n a. Debito, \n b. Credito")
        switch(tarjeta){
            case "a":
                prompt("Ingrese su número de tarjeta")
                break;
            case "b":
                let numero = prompt("Ingrese su número de tarjeta")
                alert("Calcular en \n3 cuotas, \n6 cuotas, \n12 cuotas")       
                break;          
            }
            let cuotas = prompt("Ingrese la cantidad de cuotas seleccionadas");
            function division (totalAPagar, tres, seis, doce){
                let cuotaTres = totalAPagar / tres;
                return cuotaTres;    
            } 
            alert(division(totalAPagar, cuotas));
        }

    }    
}
else {
    alert("error al ingresar datos")
}
    







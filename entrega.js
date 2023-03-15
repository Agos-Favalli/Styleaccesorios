// variable mensaje de bienvenida

let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su apellido");
let mensaje = "Bienvenid@" + " " + nombre + " " + apellido ;

// condicion para el mensaje de bienvenida

if ( (nombre != " " && apellido != " ") ) {
    alert(mensaje);

    //Variables para calculos

    let minimo = 4000
    let totalAPagar = Number (prompt ("Ingrese el importe a abonar"));
    let envioGratis = 7000
    let descuento = totalAPagar * 0.15
    let precioFinal = totalAPagar - descuento

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
        alert("El descuento obtenido es de: $"+descuento)
        alert("Precio final: $"+precioFinal)
        break;
        case "2":
        alert("Tienes un 15% de descuento")
        alert("El descuento obtenido es de: $"+descuento)
        alert("Precio final: $"+precioFinal)
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
    


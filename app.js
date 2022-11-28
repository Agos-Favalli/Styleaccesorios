

let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su apellido");
let mensaje = "Bienvenid@" + " " + nombre + " " + apellido ;



if ( (nombre != " " && apellido != " ") ) {
    alert(mensaje);

    let minimo = 4000
    let totalAPagar = prompt ("Ingrese el importe a abonar");
    let envioGratis = 7000
    let cuotas = 10000

    if (totalAPagar < minimo) {
        alert("Su importe es inferior al mínimo de compra exigido por $4000");
        alert("No se puede realizar la compra");
    } else {
        alert("realizar compra");
        if (totalAPagar <= envioGratis ) {
            alert("ingrese su codigo postal para calcular envio");   
        } else {
            alert ("envio gratis");
        }
        if (totalAPagar > cuotas){
            alert("Descuento del 15% por pago en efectivo o transferencia");
            alert("Puedes realizar el pago hasta 12 cuotas sin interés");
        }else {
            alert("Descuento del 15% por pago en efectivo o transferencia");
            alert("Puedes realizar el pago hasta 6 cuotas sin interés");
        }
        let formaDePago = prompt('Elija la forma de pago: 1: Efectivo, 2: Transferencia, 3: Tarjeta,')
        switch(formaDePago){
        case "1":
        alert("Tienes un 15% de descuento ")
        break;
        case "2":
        alert("Tienes un 15% de descuento")
        alert("La CBU para realizar la transferencia es la siguiente. 0071928374958739200098. Una vez hecha enviar comprobante para confirmar el pago mediante email o whatsapp")
        break;
        case "3": 
        let tarjeta = prompt("Selecciones la tarjeta: a. Debito, b. Credito")
        switch(tarjeta){
            case "a":
                prompt("Ingrese su número de tarjeta")
                break;
            case "b":
                let numero = prompt("Ingrese su número de tarjeta")
                alert("Calcular en cuotas 3 , 6 o 12")       
                break;          
            }
            function division (totalAPagar, tres, seis, doce){
                let cuotaTres = totalAPagar / tres;
                return cuotaTres;        
            } 
            alert(division(totalAPagar, 3));
            alert(division(totalAPagar, 6));
            alert(division(totalAPagar, 12));
        }  
    }
 }
  else {
       alert("error al ingresar datos")
  }

 

  




    

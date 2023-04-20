
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('Nombre');
const apellido = document.getElementById('Apellido');
const pais = document.getElementById('pais');
const email = document.getElementById('email');
const contrasena = document.getElementById('Contrasena');
const confirmarContrasena = document.getElementById('confirmar-ontrasena');

let datosRegistro = {};

formulario.addEventListener('submit', (e) => {
 
  e.preventDefault();
  
  // Validacion de contraseña
  if (contrasena.value !== confirmarContrasena.value) {
    alert('Las contraseñas no coinciden');
    return;
  }
  
  // Almacenamiento de datos
  datosRegistro.nombre = nombre.value;
  datosRegistro.apellido = apellido.value;
  datosRegistro.pais = pais.value;
  datosRegistro.email = email.value;
  datosRegistro.contrasena = contrasena.value;
  
  
   const datosJSON = JSON.stringify(datosRegistro);
   localStorage.setItem('datosRegistro', datosJSON);
   
 });

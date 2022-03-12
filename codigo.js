
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre').value;
  console.log(nombre);
  if(nombre.length == 0) {
    alert('No ha escrito el nombre');
     
     return;
     console.log(nombre);

  }
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No ha escrito el email');
 
    return;
  }
  var asunto = document.getElementById('asunto').value;
   if(asunto.length == 0) {
    alert('No ha escrito el asunto');

    return;
  }

    this.submit();

    console.log("Nombre: ", nombre.value);
    console.log("email: ", email.value);
    console.log("Asunto: ", asunto.value);
    console.log("Mensaje: ", texto.value);




}


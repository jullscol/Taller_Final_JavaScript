
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre');
   console.log("Nombre: ", nombre.value);
  if(nombre.length == 0) {
    alert('No ha escrito el nombre');
     
     return;
     
  }
  var email = document.getElementById('email');
   console.log("email: ", email.value);
  if(email.length == 0) {
    alert('No ha escrito el email');
 
    return;
  }
  var asunto = document.getElementById('asunto')
    console.log("Asunto: ", asunto.value);
      
   if(asunto.length == 0) {
    alert('No ha escrito el asunto');

    return;
  }

  var asunto = document.getElementById('texto')
    console.log("Mensaje: ", texto.value);
      
   if(texto.length == 0) {
    alert('No ha escrito el mensaje');

    return;
  }



    this.submit();


    
}

const mostraDatos =()=>{

 console.log("Nombre: ", nombre.value);
 console.log("email: ", email.value);
 console.log("Asunto: ", asunto.value);
 console.log("Mensaje: ", texto.value);



}
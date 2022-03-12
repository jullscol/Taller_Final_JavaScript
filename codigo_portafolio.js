const main = () => {

	let element = document.querySelector(".container");
	console.log(elemet);
    
}

const cambiarColor1 = () => {

	let element = document.querySelector(".container");
	element.classList.add("estilo1");
}
  

const cambiarColor2 = () => {

	let element = document.querySelector(".container");
	element.classList.add("estilo2");
}
  

const cambiarColor3 = () => {

	let element = document.querySelector(".container");
	element.classList.add("estilo3");
}
 
 const removerEstilos = () => {

	let element = document.querySelector(".container");
	element.classList.remove("estilo1", "estilo2", "estilo3");
} 

 

function mostrar(){

   document.getElementById("fun").style.display = "Block";
}


 function ocultar(){

   document.getElementById("fun").style.display = "none";
}


function Mostrar_Ocultar(){
     var fun =document.getElementById("fun");

     if (fun.style.display == "none"){
     	mostrar();
        document.getElementById("boton").value ="Ocultar";
     }
     else{
     	ocultar();
     	document.getElementById("boton").value ="Mostrar";
     }

}





function mostrar1(){

   document.getElementById("funone").style.display = "Block";
}


function ocultar1(){

   document.getElementById("funone").style.display = "none";
}


function Mostrar_Ocultar1(){
     var funone =document.getElementById("funone");

     if (funone.style.display == "none"){
     	mostrar1();
        document.getElementById("botonone").value ="Ocultar";
     }
     else{
     	ocultar1();
     	document.getElementById("botonone").value ="Mostrar";
     }

}





function mostrar2(){

   document.getElementById("funtwo").style.display = "Block";
}


function ocultar2(){

   document.getElementById("funtwo").style.display = "none";
}




function mostrar3(){

   document.getElementById("funthree").style.display = "Block";
}


function ocultar3(){

   document.getElementById("funthree").style.display = "none";
}


function mostrar4(){

   document.getElementById("estone").style.display = "Block";
}


function ocultar4(){

   document.getElementById("estone").style.display = "none";
}

function mostrar5(){

   document.getElementById("esttwo").style.display = "Block";
}


function ocultar5(){

   document.getElementById("esttwo").style.display = "none";
}

function mostrar6(){

   document.getElementById("estthree").style.display = "Block";
}


function ocultar6(){

   document.getElementById("estthree").style.display = "none";
}


function mostrar7(){

   document.getElementById("refone").style.display = "Block";
}


function ocultar7(){

   document.getElementById("refone").style.display = "none";
}


function mostrar8(){

   document.getElementById("reftwo").style.display = "Block";
}


function ocultar8(){

   document.getElementById("reftwo").style.display = "none";
}


function mostrar9(){

   document.getElementById("refthree").style.display = "Block";
}


function ocultar9(){

   document.getElementById("refthree").style.display = "none";
}

function mostrar10(){

   document.getElementById("refpone").style.display = "Block";
}


function ocultar10(){

   document.getElementById("refpone").style.display = "none";
}

function mostrar11(){

   document.getElementById("refptwo").style.display = "Block";
}


function ocultar11(){

   document.getElementById("refptwo").style.display = "none";
}

function mostrar12(){

   document.getElementById("refpthree").style.display = "Block";
}


function ocultar12(){

   document.getElementById("refpthree").style.display = "none";
}

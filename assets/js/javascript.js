var enviar1 =document.getElementById('enviar');
var imprimir=document.getElementById('imprimir');
enviar1.addEventListener('click', function datos(event){
  event.preventDefault();
  var inputGeneral = document.getElementsByClassName("input");

  if(inputGeneral[0].value.length == 0 || inputGeneral[1].value.length == 0 || inputGeneral[2].value.length == 0 || inputGeneral[3].value.length == 0){
    window.alert("falta completar")
  }else{
    var nombre1=document.getElementById('nombre').value;
    var apellido1=document.getElementById('apellido').value;
    var dni1=document.getElementById('dni').value;
    var direccion1=document.getElementById('direccion').value;

  var respuesta =  "• Nombre: "+ nombre1 + "<br>" +
                         "• Apellido: "+ apellido1 + "<br>" +
                         "• DNI: "+ dni1 + "<br>" +
                         "• Dirección: "+ direccion1 + "<br>";
imprimir.innerHTML = respuesta;

  }
});

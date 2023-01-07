

const Tecla = (EsperaTecla) =>  { //Funcion fecla
  var evento = EsperaTecla;
  var Teclado = document.getElementById("teclado")
  var caracter = evento.charCode & evento.keyCode;
  var letra = String.fromCharCode(caracter);
  var codigo = letra.charCodeAt(0);

  Teclado.innerHTML = `<h1>Teclado: <br> Carácter [${letra}] <br> Código [${codigo}]</h1>`

  for(var i=1; i<EsperaTecla.length; i++) {
   Teclado.innerHTML += '<h1>'+EsperaTecla[i]+'</h1>';
  }
}
document.onkeypress = Tecla;
// document.onmouseenter = Tecla;





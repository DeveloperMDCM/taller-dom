
const GenerarTabla = () =>{
    codigo =  document.getElementById("codigo").value;
    nombre =  document.getElementById("nombre").value;
    var datos = `<table border="2px"><tr><td><h2>Codigo</h2></td><td><h2>Nombre </h2></td></tr><tr><td><h1>gfg</h1></td><td><h1>${nombre}</h1></td></tr></table>`;
       document.getElementById("tabla").innerHTML = datos;
   
}

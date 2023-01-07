var palabras = ["Loco", "Manzana", "Silla", "Mesa", "Pc", "Portatil", "Amor", "Pereza", "Pala", "Palo", "Teclado", "Usb", "Mico", "Bafle", "Chicle"];
function anade() {
    var rand = Math.floor(Math.random() * palabras.length);
    var valor = palabras[rand];
    var palabra = document.getElementById('lista');
    palabra.innerHTML = valor;
}
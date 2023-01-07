function conversionGrados(centígrados) { 
    conversion = (centígrados * (9/5)) + 32;  
    document.getElementById('resultado').value = conversion + ' °C';
}
function position(event){
    
    var x = event.clientX;
    var y = event.clientY;
    var mousePositions = document.getElementById('mousePositions');
    mousePositions.innerHTML = 'X coords: '+x+', Y coords: '+y;

}
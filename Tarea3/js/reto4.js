window.onload = function(){

    document.getElementById("output-img").innerHTML = "<img src='imagenes/viajes.webp' class='img-fluid rounded' alt='viajes'/>"

    document.getElementById("viajes").onchange = function(e){

        let n = e.target.value;
        let imagen = "<img src='imagenes/'" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='paises'/>";
        document.getElementById("output-img").innerHTML = imagen;
    };

};

// funcion del boton Reiniciar
document.getElementById("btn-clean").onclick = function(){

    document.getElementById("output-img").innerHTML = "<img src='imagenes/viajes.webp' class='img-fluid rounded' alt='logo'/>";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("viajes").value = "";

};
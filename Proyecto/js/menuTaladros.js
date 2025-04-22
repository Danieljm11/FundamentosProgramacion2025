document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "bosch":
            document.querySelector('.galeriaBoschTaladro').style.display = "block"
            document.querySelector('.galeriaDewaltTaladro').style.display = "none"
            document.querySelector('.galeriaMilwaukeeTaladro').style.display = "none"
            break;

        case "dewalt":
            document.querySelector('.galeriaBoschTaladro').style.display = "none"
            document.querySelector('.galeriaDewaltTaladro').style.display = "block"
            document.querySelector('.galeriaMilwaukeeTaladro').style.display = "none"
            break;

        case "milwaukee":
            document.querySelector('.galeriaBoschTaladro').style.display = "none"
            document.querySelector('.galeriaDewaltTaladro').style.display = "none"
            document.querySelector('.galeriaMilwaukeeTaladro').style.display = "block"
            break;

        default:
            document.querySelector('.galeriaBoschTaladro').style.display = "none"
            document.querySelector('.galeriaDewaltTaladro').style.display = "none"
            document.querySelector('.galeriaMilwaukeeTaladro').style.display = "none"
            break;
    }
}
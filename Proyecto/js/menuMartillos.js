document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "bosch":
            document.querySelector('.galeriaBosch').style.display = "block"
            document.querySelector('.galeriaDewalt').style.display = "none"
            document.querySelector('.galeriaMilwaukee').style.display = "none"
            break;

        case "dewalt":
            document.querySelector('.galeriaBosch').style.display = "none"
            document.querySelector('.galeriaDewalt').style.display = "block"
            document.querySelector('.galeriaMilwaukee').style.display = "none"
            break;

        case "milwaukee":
            document.querySelector('.galeriaBosch').style.display = "none"
            document.querySelector('.galeriaDewalt').style.display = "none"
            document.querySelector('.galeriaMilwaukee').style.display = "block"
            break;

        default:
            document.querySelector('.galeriaBosch').style.display = "none"
            document.querySelector('.galeriaDewalt').style.display = "none"
            document.querySelector('.galeriaMilwaukee').style.display = "none"
            break;
    }
}
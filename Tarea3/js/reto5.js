window.onload = function () {

    document.getElementById("modelo").onchange = function (e) {

        a = e.target.value;
        if (a == "MT-03") {
            var imagen = "imagenes/reto5/yamaha-mt-03.png";

        } else if (a == "MT-07") {
            var imagen = "imagenes/reto5/yamaha-mt-07.png";

        } else if (a == "R6") {
            var imagen = "imagenes/reto5/yamaha-r6.png"

        } else if (a == "R1") {
            var imagen = "imagenes/reto5/yamaha-r1.png"
        }

        document.getElementById("imagen").src = imagen;
    }

    document.getElementById("version").onchange = function (es) {
        n = es.target.value;
    }

}

function calcular() {
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccione el modelo y la version del carro",
        });
    }
    if (document.getElementById("version").value == "Seleccione una version:") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccione el modelo y la version del carro",
        });
    }

    var montoCuota = 0;
    switch (a) {
        case "MT-03":
            if (n == "2025") montoCuota = 2000;
            else montoCuota = 1000;
            break;   

        case "MT-07":
            if (n == "2025") montoCuota = 2000;
            else montoCuota = 1000;

        case "R6":
            if (n == "2025") montoCuota = 2000;
            else montoCuota = 1000;

        case "R1":
            if (n == "2025") montoCuota = 2000;
            else montoCuota = 1000;

        default:
            break; 
    }

    let imagenDireccion = "imagenes/reto5/" + ".png";

    swal.fire({

        html: "<p> Mira la cuota mensual del " + 
        a +
        " " +
        n +
        "<br><br> <strong> Cuota mensual: </strong></p> " +
        "$" +
        montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Motocicleta " + a,
    });
}
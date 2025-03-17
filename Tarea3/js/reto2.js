function conversionDolares() {
    
    const montoDolares = document.getElementById('monto-dolares').value;
    const cambioDolares = document.getElementById('cambio-dolares').value;

    if (montoDolares === "" || cambioDolares === "") {

        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
            showClass: {
                popup: `
                    animate_animated
                    animate_fadeIn
                    `
            },
            hideClass: {
                popup: `
                    animate_animated
                    animate_fadeOut
                    `
            }
        });

    } else {

        let total = montoDolares * cambioDolares

        resultadoDolares.innerHTML = '<strong>La cantidad de colones seria de:</strong> ' + total

    }
}

function conversionColones() {
    
    const montoColones = document.getElementById('monto-colones').value;
    const cambioColones = document.getElementById('cambio-colones').value;

    if (montoColones === "" || cambioColones === "") {

        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
            showClass: {
                popup: `
                    animate_animated
                    animate_fadeIn
                    `
            },
            hideClass: {
                popup: `
                    animate_animated
                    animate_fadeOut
                    `
            }
        });

    } else {

        let total = montoColones / cambioColones

        resultadoColones.innerHTML = '<strong>La cantidad de colones seria de:</strong> ' + total

    }
}

function limpiarDatosDolares() {

    document.getElementById('monto-dolares').value = '';
    document.getElementById('cambio-dolares').value = '';
    document.getElementById('resultadoDolares').innerHTML = "";

}

function limpiarDatosColones() {

    document.getElementById('monto-colones').value = '';
    document.getElementById('cambio-colones').value = '';
    document.getElementById('resultadoColones').innerHTML = "";
}
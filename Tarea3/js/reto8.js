// Declaracion del arreglo vacio para añadir estudiantes conforme se llenan los inputs
const deudores = [];

// funcion que permite agregar a los estudiantes al arreglo

function agregarDeudor() {

    const nombre = document.getElementById('nombre').value,
        apellido = document.getElementById('apellidos').value,
        // Obtener el valor del campo de entrada 'pago1,2,3" y convertirlo a un numero de punto flotante (decimales)
        pago1 = parseFloat(document.getElementById('pago1').value),
        pago2 = parseFloat(document.getElementById('pago2').value),
        montoTotal = parseFloat(document.getElementById('montoTotal').value);

    // La validacion isNan dice que si pago1,2,3 no es un numero valido (por ejemplo si es una cadena no numerica o si esta vacia), entonces isNan devuelve true

    if (nombre === "" || apellido === "" || isNaN(pago1) || isNaN(pago2) || isNaN(montoTotal)) {

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

        const totalPagar = montoTotal - (pago1 + pago2);

        deudores.push({ nombre, apellido, totalPagar });

        const selectDeudor = document.getElementById('seleccionarDeudor');

        const option = document.createElement('option');

        option.value = nombre + ' ' + apellido;

        option.text = nombre + ' ' + apellido;

        selectDeudor.appendChild(option);

        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: "Deudor agregado",
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

    }

}

function calcularMontoTotal() {

    const nombreSeleccionado = document.getElementById('seleccionarDeudor').value;

    const resultado = document.getElementById('resultado');

    let deudorSeleccionado = null;

    for (let i = 0; i < deudores.length; i++) {

        const deudor = deudores[i];

        const nombreCompleto = deudor.nombre + ' ' + deudor.apellido;

        if (nombreCompleto === nombreSeleccionado) {
            deudorSeleccionado = deudor;
            break;
        }
    }

    if (deudorSeleccionado) {

        const montoPagar = deudorSeleccionado.totalPagar;
        resultado.textContent = 'El monto que debe ' + nombreSeleccionado + ' es de: ' + montoPagar;
    } else {

        resultado.textContent = '';

    }
}



function limpiarDatos() {

    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('pago1').value = '';
    document.getElementById('pago2').value = '';
    document.getElementById('montoTotal').value = '';

}



function facturar(){

    const nombreCliente = document.getElementById('nombre').value
    const nombreProducto = document.getElementById('producto').value
    const cantidadProducto = document.getElementById('cantidad').value
    const precioProducto = document.getElementById('precio').value

    if (nombreCliente === "" || nombreProducto === "" || cantidadProducto === "" || precioProducto === ""
    ) {

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

        let subtotal = precioProducto;

        if (cantidadProducto != 1 || cantidadProducto != 0){

            subtotal = subtotal * cantidadProducto;

        }

        let iva = subtotal * 0.13;
        let servicio = subtotal * 0.5;
        let montoFinal = subtotal + iva + servicio;

        resultado.innerHTML = '<strong>Nombre del cliente:</strong> ' + nombreCliente + '<br>' +
        '<strong>Articulo comprado:</strong> ' + nombreProducto + '<br>' +
        '<strong>Cantidad:</strong> ' + cantidadProducto + '<br>' +
        '<strong>Precio:</strong> ' + precioProducto + '<br>' +
        '<strong>Subtotal:</strong> ' + subtotal + '<br>' +
        '<strong>IVA 13%:</strong> ' + iva + '<br>' +
        '<strong>Servicio 5%:</strong> ' + servicio + '<br>' +
        '<strong>Total a pagar:</strong> ' + montoFinal;

    }
}

function limpiarDatos() {

    document.getElementById('nombre').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('resultado').innerHTML = "";


}
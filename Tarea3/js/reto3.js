function menu() {
    let seleccion = document.getElementById('opciones').value;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "Success",
                title: "Yamaha",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://www.yamahacostarica.com/";
            });
            return;

        case 'B':
            Swal.fire({
                icon: "Success",
                title: "Honda",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://mundohonda.cr/";
            });
            return;
        case 'C':
            Swal.fire({
                icon: "Success",
                title: "Kawasaki",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://costarica.kawasaki-la.com/";
            });
            return;
    }
}
// conexion con HTML usando el id btn-login y cargando la funcion llamada login
document.getElementById("btn-login").addEventListener("click",login)


// funcion que valida el login
function validation_alert(ptext) {

    swal.fire({

        // icon: "error",
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "0063be",
        // carga de la microinteraccion1
        html: '<iframe src="https://lottie.host/embed/5dc272d7-5f2a-4ed7-8e07-70ffa7614680/8tvvrrMO2R.json"></iframe><br><p>' + ptext + "</p>",

    });

}

// funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    // declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    // identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    // ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            // este es el texto que lleva el parametro de la funcion validacion_alert
            text = "Los campos requeridos NO pueden estar vacios"
            // carga la funcion validacion_alert
            validation_alert(text);
            // agregar el error del borde rojo
            document.getElementById(input_id[i]).classList.add("error");
            // incrementa la variable
            error_count++;
        }

    }
    // validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                // icon: "Success",
                title: "Credenciales correctos",
                showConfirmButton: false,
                // 5000 milisegundos equivalen a 5 seg
                timer: 5000,
                html: '<iframe src="https://lottie.host/embed/acd88eca-8386-42c1-9f3f-bf8952014d53/wjCHTPtpOB.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                // permite ejecutar la URL
                window.location.href = "landing.html", "blank";
                
            });

        }else{
            text = "Usuario o contraseña incorrecta.";
            // carga la funcion de validacion de alerta
            validation_alert(text);
        }
    }
}

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cui = document.getElementById("cui");
const departamento = document.getElementById("departamento");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confir = document.getElementById("confir");
let bar = document.getElementById("bar");

function registrar() {

    console.log(nombre.value);
    console.log(correo.value);
    console.log(contrasena.value);
    console.log(confir.value);
    if (contrasena.value == confir.value) {
        alert('Datos correctos, nuevo usuario ' + nombre.value);

    } else {

        alert('Error las contraseñas no coinciden');
    }
}

function iniciar() {
    console.log(nombre.value);
    
    window.confirm('Bienvenido ' + nombre.value);
}

function ingresar() {
console.log(nombre.value);
console.log(apellido.value);
console.log(cui.value);
console.log(departamento.value);
alert('Datos ingresados');
}

function cambiar(){
    console.log(bar.value);
    if(bar.value==='reg'){
        console.log(bar.value);
        location.href="./ingresoDatos.html"
    }else if(bar.value==='ini'){
        location.href="./login.html"
    }else{
        location.href="./ingresoCliente.html"
    }
}
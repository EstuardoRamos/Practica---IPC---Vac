
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confir = document.getElementById("confir");

function saludar(){
    console.log(contrasena.value==confir.value)
    if(contrasena.value==confir.value){
        console.log(nombre.value);
        alert('Datos correctos '+nombre.value);

    }else{
        console.log(nombre.value);
        console.log(contrasena.value);
        console.log(confir.value);
        alert('Error '+nombre.value);
    }

    
}
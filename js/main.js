const usuarios = [
    { nombre:'Itzel', passw: 1234, monto: 300 },
    { nombre:'Angel', passw: 1234, monto: 300 },
    { nombre:'Xiao', passw: 1234, monto: 300 }
]
const ingresar = document.getElementById('ingresar');
const accesoDenegado = document.querySelector("#accesoDenegado");

function validarUsuario(usuario, password) {
    for (const users of usuarios) {
        if (usuario === users.nombre && password == users.passw) {
            return true;
        }
    } return false;
}

function loogin() {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const password = parseInt(document.getElementById('password').value);
    if (validarUsuario(usuario, password) == true) {
        window.location="onset.html";
    } else {
        accesoDenegado.innerHTML = "Nombre o contraseña incorrecta vuelve a intentar";
    }
}
ingresar.addEventListener("click", loogin);


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
            return users;
        }
    } return false;
}

function loogin() {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const password = parseInt(document.getElementById('password').value);
    const contentFunc = validarUsuario(usuario,password); //Almacena la funcion para despues mostrar la info que coincida :D
    if (contentFunc) {
        var jsonInfo = JSON.stringify(contentFunc);
        localStorage.setItem("info",jsonInfo);
        window.location='./onset.html';
    }
    if (contentFunc===false) {
        accesoDenegado.innerHTML='Contraseña o usuario incorrecto, vuelve a intentarlo';
    }
}
ingresar.addEventListener("click", loogin);
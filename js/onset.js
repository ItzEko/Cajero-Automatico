var jsonInfo = localStorage.getItem('info');//trae todos los datos del localstorage
// console.log(jsonInfo);
var objInfo = JSON.parse(jsonInfo);//covierte la informacion a un objeto 
// console.log(objinfo);
const nameUser = document.getElementById('nameUser');
nameUser.innerHTML = '<h3>Hola, bienvenid@ ' + objInfo.nombre + '</h3>';

const saldo = document.querySelector('#saldo');
saldo.innerHTML = '<p>$' + objInfo.monto + '</p>';

const DeptSaldo = document.getElementById('DeptSaldo');
function SumSaldo() {
    const CantSaldo = parseInt(document.getElementById('CantSaldo').value);
    //El cliente no puede depositar mas de $50,000
    if (CantSaldo > 50000) {
        window.alert('No puedes depositar más de $50,000, Intentalo denuevo');
    } else {
        //alerta de deposito realizado 
        objInfo.monto = objInfo.monto + CantSaldo;
        localStorage.setItem('info', JSON.stringify(objInfo));
        console.log(localStorage.getItem('info'));
        window.alert('Has depositado existosamente la cantidad de $' + CantSaldo + ', y tu saldo actual es de $' + objInfo.monto);
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
}
DeptSaldo.addEventListener('click', SumSaldo);

const retirarMonto = document.getElementById('retirarMonto');
function RestSaldo(params) {
    const cantRetirarMonto = parseInt(document.getElementById('cantRetirar').value);
    if (cantRetirarMonto > 30000) {
        window.alert('No puedes retirar más de $30,000, Intentalo denuevo');
    }
    else if (cantRetirarMonto > objInfo.monto) {
        window.alert('No puedes retirar la cantidad de ' + cantRetirarMonto + ', por que es mas de lo que tienes en tu cuenta.');
    } else {
        //alerta de retiro realizado 
        objInfo.monto = objInfo.monto - cantRetirarMonto;
        localStorage.setItem('info', JSON.stringify(objInfo));
        console.log(localStorage.getItem('info'));
        window.alert('Has retirado existosamente la cantidad de $' + cantRetirarMonto + ', y tu saldo actual es de $' + objInfo.monto);
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
}
retirarMonto.addEventListener('click', RestSaldo);

const pgLuz = document.getElementById('pgLuz');
const pgAgua = document.getElementById('pgAgua');
const pgInternet = document.getElementById('pgInternet');
var luz = 100;
function pagarServiciosLuz() {
    const cantLuz = parseInt(document.getElementById('cantLuz').value);
    if (cantLuz > objInfo.monto) {
        window.alert('no puedes pagar tu servicio de luz ya que tu saldo es menor a la cantidad a pagar');
    }else{
        objInfo.monto = objInfo.monto - cantLuz;
        localStorage.setItem('info', JSON.stringify(objInfo));
        console.log(localStorage.getItem('info'));
        window.alert('Has pagado existosamente tu servicio de Luz tu saldo actual es de $' + objInfo.monto);
        setTimeout(function () {
            location.reload();
        }, 2000);
        }
    }
    function pagarServiciosAgua() {
        const cantAgua = parseInt(document.getElementById('cantAgua').value);
        if (cantAgua > objInfo.monto) {
            window.alert('no puedes pagar tu servicio de Agua ya que tu saldo es menor a la cantidad a pagar');
        }else{
            objInfo.monto = objInfo.monto - cantAgua;
            localStorage.setItem('info', JSON.stringify(objInfo));
            console.log(localStorage.getItem('info'));
            window.alert('Has pagado existosamente tu servicio de agua tu saldo actual es de $' + objInfo.monto);
            setTimeout(function () {
                location.reload();
            }, 2000);
            }
        }
        function pagarServiciosInternet() {
            const cantInternet = parseInt(document.getElementById('cantInternet').value);
            if (cantInternet > objInfo.monto) {
                window.alert('no puedes pagar tu servicio de Internet ya que tu saldo es menor a la cantidad a pagar');
            }else{
                objInfo.monto = objInfo.monto - cantInternet;
                localStorage.setItem('info', JSON.stringify(objInfo));
                console.log(localStorage.getItem('info'));
                window.alert('Has pagado existosamente tu servicio de Internet tu saldo actual es de $' + objInfo.monto);
                setTimeout(function () {
                    location.reload();
                }, 2000);
                }
            }
pgLuz.addEventListener('click', pagarServiciosLuz);
pgAgua.addEventListener('click', pagarServiciosAgua);
pgInternet.addEventListener('click', pagarServiciosInternet);
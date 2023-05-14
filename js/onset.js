var jsonInfo = localStorage.getItem('info');//trae todos los datos del localstorage
// console.log(jsonInfo);
var objInfo = JSON.parse(jsonInfo);//covierte la informacion a un objeto 
// console.log(objinfo);
const nameUser=document.getElementById('nameUser');
nameUser.innerHTML='<h3>Hola, bienvenid@ '+objInfo.nombre+'</h3>';





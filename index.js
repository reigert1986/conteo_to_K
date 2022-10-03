console.clear();

const contador = document.querySelector(".contador");

/* 
 * FECHA DEL KARAOKE*/
let date = new Date("2022/10/13 21:30:00").getTime();
//let date = new Date("2022/10/03 17:35:00").getTime();
/*
setInterval(() =>{
	
	let fechaActual = new Date().getTime();
	let restarDias = date - fechaActual;
	
	let days = Math.floor(restarDias / (1000 * 60 * 60 * 24));
	let hours = Math.floor((restarDias % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));	
	let minutes = Math.floor((restarDias % (1000 * 60 * 60)) / (1000 * 60));	
	let seconds = Math.floor((restarDias % (1000 * 60)) / 1000);
	
	contador.innerHTML = `<span> Faltan: <br>
			<p>Dias: ${days} </p>
			<p>Horas: ${('0' + hours).slice(-2)} </p> 
			<p>Minutos: ${('0' + minutes).slice(-2)} </p>
			<p>Segundos: ${('0'+seconds).slice(-2)} </p>
			
							</span>`;
	console.log(typeof seconds)
							
	if(seconds === 0){
		contador.innerHTML = `<h2>QUE COMIENCE LA FIESTA. A CANTAR!!!</h2> `;
	}
							
},1000); 
 
*/

let conteo = setInterval(retroceso);
let seconds = null;
function retroceso(){
	let fechaActual = new Date().getTime();
	let restarDias = date - fechaActual;
	console.log(restarDias)
	
	let days = Math.floor(restarDias / (1000 * 60 * 60 * 24));
	let hours = Math.floor((restarDias % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));	
	let minutes = Math.floor((restarDias % (1000 * 60 * 60)) / (1000 * 60));	
	let seconds = Math.floor((restarDias % (1000 * 60)) / 1000);
	
	contador.innerHTML = `<span> Faltan: <br>
			<p>Dias: ${days} </p>
			<p>Horas: ${('0' + hours).slice(-2)} </p> 
			<p>Minutos: ${('0' + minutes).slice(-2)} </p>
			<p>Segundos: ${('0'+seconds).slice(-2)} </p>
			
							</span>`;
							
	if(restarDias < 0){
		clearInterval(conteo);
		contador.innerHTML = `<h2>QUE COMIENCE LA FIESTA. A CANTAR!!!</h2> `;
	}
}





//Funcion para convertir segundos a minutos y horas
/*
function segundosAString(segundos) {
	var hora="";
	if (segundos>3600){
		hora = Math.floor(segundos / 3600);
		hora = (hora < 10)? '0' + hora : hora;
		hora+=":"
	}
	var minutos = Math.floor((segundos / 60) % 60);
	minutos = (minutos < 10)? '0' + minutos : minutos;
	var segundos = segundos % 60;
	segundos = (segundos < 10)? '0' + segundos : segundos;
	return hora  + minutos + ':' + segundos;
}
*/

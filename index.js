console.clear();

const contador = document.querySelector(".contador");
const primerPartido = document.querySelector(".primerPartido");
const segundoPartido = document.querySelector(".segundoPartido");
const tercerPartido = document.querySelector(".tercerPartido");

console.log(segundoPartido)
console.log(tercerPartido)
/* 
 * FECHA DEL Mundial*/

let date = new Date("2022/11/20 12:00:00").getTime();
/* FECHA DEL los partidos de Uruguay*/
/*vs Corea del Sur*/
let vsCorea = new Date("2022/11/24 10:00:00").getTime();
/*vs Portugal*/
let vsPortugal = new Date("2022/11/28 16:00:00").getTime();
/*vs Ghana*/
let vsGhana = new Date("2022/12/02 12:00:00").getTime();

/* Elegir el partido */

/**/
function partido1(){
    
    let conteoCorea = setInterval(()=>{
    let fechaActual = new Date().getTime();
	let restarDias = vsCorea - fechaActual; 
     /*funcion obtener: dia , fecha, hora, minutos, segundos*/
    function obtenerDFHMS(){
        let days = Math.floor(restarDias / (1000 * 60 * 60 * 24));
        let hours = Math.floor((restarDias % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));	
        let minutes = Math.floor((restarDias % (1000 * 60 * 60)) / (1000 * 60));	
        let seconds = Math.floor((restarDias % (1000 * 60)) / 1000);
        function mostar(){
            primerPartido.innerHTML = `<span> <h4>Falta Para el comienzo:</h4> <br>
                <p class="letracartel">Dias: ${days} </p>
                <p class="letracartel">Horas: ${('0' + hours).slice(-2)} </p> 
                <p class="letracartel">Minutos: ${('0' + minutes).slice(-2)} </p>
                <p class="letracartel">Segundos: ${('0'+seconds).slice(-2)} </p>
            
                            </span>`; 
        }
        mostar();
    }

    
    obtenerDFHMS()

    });
}

function partido2(){
    
    let conteoPortugal = setInterval(()=>{
    let fechaActual = new Date().getTime();
	let restarDias = vsPortugal - fechaActual; 
     /*funcion obtener: dia , fecha, hora, minutos, segundos*/
    function obtenerDFHMS(){
        let days = Math.floor(restarDias / (1000 * 60 * 60 * 24));
        let hours = Math.floor((restarDias % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));	
        let minutes = Math.floor((restarDias % (1000 * 60 * 60)) / (1000 * 60));	
        let seconds = Math.floor((restarDias % (1000 * 60)) / 1000);
        function mostar(){
            segundoPartido.innerHTML = `<span> <h4>Falta Para el comienzo:</h4> <br>
                <p class="letracartel">Dias: ${days} </p>
                <p class="letracartel">Horas: ${('0' + hours).slice(-2)} </p> 
                <p class="letracartel">Minutos: ${('0' + minutes).slice(-2)} </p>
                <p class="letracartel">Segundos: ${('0'+seconds).slice(-2)} </p>
            
                            </span>`; 
        }
        mostar();
    }

    
    obtenerDFHMS()

    });
}

function partido3(){
    
    let conteoGhana = setInterval(()=>{
    let fechaActual = new Date().getTime();
	let restarDias = vsGhana - fechaActual; 
     /*funcion obtener: dia , fecha, hora, minutos, segundos*/
    function obtenerDFHMS(){
        let days = Math.floor(restarDias / (1000 * 60 * 60 * 24));
        let hours = Math.floor((restarDias % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));	
        let minutes = Math.floor((restarDias % (1000 * 60 * 60)) / (1000 * 60));	
        let seconds = Math.floor((restarDias % (1000 * 60)) / 1000);
        function mostar(){
            tercerPartido.innerHTML = `<span> <h4>Falta Para el comienzo:</h4> <br>
                <p class="letracartel">Dias: ${days} </p>
                <p class="letracartel">Horas: ${('0' + hours).slice(-2)} </p> 
                <p class="letracartel">Minutos: ${('0' + minutes).slice(-2)} </p>
                <p class="letracartel">Segundos: ${('0'+seconds).slice(-2)} </p>
            
                            </span>`; 
        }
        mostar();
    }

    
    obtenerDFHMS()

    });
}
/**/


partido1()
partido2()
partido3()


let conteo = setInterval(retroceso); /*conteo del Mundial*/
function retroceso(){
   
	let fechaActual = new Date().getTime();
	let restarDias = date - fechaActual; // date se remplaza por fecha
	
	
        let days = Math.floor(restarDias / (1000 * 60 * 60 * 24));
        let hours = Math.floor((restarDias % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));	
        let minutes = Math.floor((restarDias % (1000 * 60 * 60)) / (1000 * 60));	
        let seconds = Math.floor((restarDias % (1000 * 60)) / 1000);
    
	
	
	contador.innerHTML = `<span> <h2>Falta Para el comienzo:</h2> <br>
			<p class="letracartel">Dias: ${days} </p>
			<p class="letracartel">Horas: ${('0' + hours).slice(-2)} </p> 
			<p class="letracartel">Minutos: ${('0' + minutes).slice(-2)} </p>
			<p class="letracartel">Segundos: ${('0'+seconds).slice(-2)} </p>
			
							</span>`;
							
	if(restarDias < 0){
		clearInterval(conteo);
		contador.innerHTML = `<h2>Lets PLay a Jugar!!!!</h2> `;
	}
}







